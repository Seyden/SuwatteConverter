import { ChangeEvent, useEffect, useState, useRef } from 'react'
import * as Paperback from '@/lib/backups/paperback/Paperback'
import * as Aidoku from '@/lib/backups/aidoku/Aidoku'
import { unzipSync } from 'fflate'
import { SuwatteBackup } from '@/@types/suwatte'
import { parse } from '@/lib/plist/binary.parse'

interface SuwatteResult {
  backup: SuwatteBackup;
  dateString: string;
}

Date.prototype.toJSON = function () {
    return this.toISOString().slice(0,-5)+"Z"
}

export default function SuwatteWrapper() {
  const [conversionSuccess, setConversionSuccess] = useState<boolean>(false)
  const [suwatteJson, setSuwatteJson] = useState<string>('{}')
  const [newBackupName, setNewBackupName] = useState<string>('Suwatte.json')
  const [consoleOutput, setConsoleOutput] = useState<Array<string>>(['> Ready.'])
  const consoleEndRef = useRef<HTMLDivElement | null>(null)
  const scrollToBottom = () => {
    consoleEndRef.current?.scrollIntoView({
      behavior: 'auto',
      block: 'nearest',
      inline: 'start'
    })
  }

  useEffect(scrollToBottom, [consoleOutput])

  function fileChanged(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    setConsoleOutput(['> Starting...'])

    if (event.target.files == null) {
      setConsoleOutput((consoleOutput) => [
        ...consoleOutput,
        '> ERROR: No files were provided! Try reuploading?'
      ])
      console.log()

      return
    }

    // We know that files isn't null at this point
    setConsoleOutput((consoleOutput) => [
      ...consoleOutput,
      `> Your old backup name is: ${event.target.files![0].name}`
    ])

    let fr = new FileReader()

    fr.onload = async (e) => {
      if (e.target == null) {
        setConsoleOutput((consoleOutput) => [
          ...consoleOutput,
          '> ERROR: Something went wrong when parsing your backup, try uploading again.'
        ])
        return
      }

      let backupResult: SuwatteResult | null;
      if (event.target.id === 'uploadPaperback') {
        const zipBuffer = new Uint8Array(e.target.result as ArrayBuffer);
        const unzipped = unzipSync(zipBuffer)
        const fileArray = Object.keys(unzipped)
                                .filter(filename => unzipped[filename].length > 0)
                                .map(filename => new File([unzipped[filename]], filename))
        backupResult = await Paperback.toSuwatte(fileArray, setConsoleOutput)

        setSuwatteJson(JSON.stringify(backupResult.backup))
      } else if (event.target.id == 'uploadAidoku') {
        const buffer = e.target.result as ArrayBuffer;
        const dict = parse(buffer);
        backupResult = await Aidoku.toSuwatte(dict, setConsoleOutput);
        if (backupResult) {
          setSuwatteJson(JSON.stringify(backupResult.backup))
        }
      } else {
        setConsoleOutput((consoleOutput) => [
          ...consoleOutput,
          '> ERROR: Something went wrong when parsing your backup, try uploading again.'
        ])
        return
      }
      if (backupResult) {
        const dateString = backupResult.dateString
        setNewBackupName(`Suwatte-${dateString}.json`)

        setConsoleOutput((consoleOutput) => [
          ...consoleOutput,
          '> Conversion successful.',
          `  Your new backup name is: Suwatte-${dateString}.json`
        ])

        getBlobLink()
        setConversionSuccess(true)
      }
    }

    fr.readAsArrayBuffer(event.target.files[0])
  }

  // Fetch blob link for downloading
  function getBlobLink(): string {
    const blob = new Blob([suwatteJson], { type: 'application/json' })
    return URL.createObjectURL(blob)
  }

  return (
    <div className="flex flex-col relative items-center justify-content-center">
      <p className="pb-5">To get started, upload a backup from one of the below manga apps</p>
      <div>
        <label
          htmlFor="uploadPaperback"
          className="border-solid border-2 text-lg border-red-300 p-2 rounded-md cursor-pointer hover:bg-red-300 hover:text-black duration-200 m-2">
          <strong>Paperback</strong>
        </label>
        <input
          type="file"
          id="uploadPaperback"
          accept=".pas4"
          className="hidden"
          onChange={fileChanged}
        />
        <label
            htmlFor="uploadAidoku"
            className="border-solid border-2 text-lg border-red-300 p-2 rounded-md cursor-pointer hover:bg-red-300 hover:text-black duration-200 m-2">
          <strong>Aidoku</strong>
        </label>
        <input
            type="file"
            id="uploadAidoku"
            accept=".aib"
            className="hidden"
            onChange={fileChanged}
        />
      </div>
      <h1 className="text-2xl pt-8">Console</h1>
      <ul className="bg-darkbg scrollbar-thin scrollbar-thumb-whitesmoke scrollbar-thumb-rounded scrollbar-track-darkbg my-3 h-52 w-full whitespace-pre-line overflow-y-scroll">
        {consoleOutput.map((output, index) => (
          <li key={index}>{output}</li>
        ))}
        <div ref={consoleEndRef} />
      </ul>
      {conversionSuccess && (
        <button className="border-solid border-2 text-lg border-white p-2 rounded-md cursor-pointer hover:bg-white hover:text-black duration-200">
          <a href={getBlobLink()} download={newBackupName}>
            Download
          </a>
        </button>
      )}
    </div>
  )
}