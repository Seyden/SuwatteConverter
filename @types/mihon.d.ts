import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace MihonObjectModel. */
export namespace MihonObjectModel {

    /** Properties of a Backup. */
    interface IBackup {

        /** Backup backupManga */
        backupManga?: (MihonObjectModel.IBackupManga[]|null);

        /** Backup backupCategories */
        backupCategories?: (MihonObjectModel.IBackupCategory[]|null);

        /** Backup backupSources */
        backupSources?: (MihonObjectModel.IBackupSource[]|null);
    }

    /** Represents a Backup. */
    class Backup implements IBackup {

        /**
         * Constructs a new Backup.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IBackup);

        /** Backup backupManga. */
        public backupManga: MihonObjectModel.IBackupManga[];

        /** Backup backupCategories. */
        public backupCategories: MihonObjectModel.IBackupCategory[];

        /** Backup backupSources. */
        public backupSources: MihonObjectModel.IBackupSource[];

        /**
         * Creates a new Backup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Backup instance
         */
        public static create(properties?: MihonObjectModel.IBackup): MihonObjectModel.Backup;

        /**
         * Encodes the specified Backup message. Does not implicitly {@link MihonObjectModel.Backup.verify|verify} messages.
         * @param message Backup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Backup message, length delimited. Does not implicitly {@link MihonObjectModel.Backup.verify|verify} messages.
         * @param message Backup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Backup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Backup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.Backup;

        /**
         * Decodes a Backup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Backup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.Backup;

        /**
         * Verifies a Backup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Backup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Backup
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.Backup;

        /**
         * Creates a plain object from a Backup message. Also converts values to other types if specified.
         * @param message Backup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.Backup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Backup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Backup
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BackupManga. */
    interface IBackupManga {

        /** BackupManga source */
        source: (number|Long);

        /** BackupManga url */
        url: string;

        /** BackupManga title */
        title?: (string|null);

        /** BackupManga artist */
        artist?: (string|null);

        /** BackupManga author */
        author?: (string|null);

        /** BackupManga description */
        description?: (string|null);

        /** BackupManga genre */
        genre?: (string[]|null);

        /** BackupManga status */
        status?: (number|null);

        /** BackupManga thumbnailUrl */
        thumbnailUrl?: (string|null);

        /** BackupManga dateAdded */
        dateAdded?: (number|Long|null);

        /** BackupManga viewer */
        viewer?: (number|null);

        /** BackupManga chapters */
        chapters?: (MihonObjectModel.IBackupChapter[]|null);

        /** BackupManga categories */
        categories?: ((number|Long)[]|null);

        /** BackupManga tracking */
        tracking?: (MihonObjectModel.IBackupTracking[]|null);

        /** BackupManga favorite */
        favorite?: (boolean|null);

        /** BackupManga chapterFlags */
        chapterFlags?: (number|null);

        /** BackupManga viewerFlags */
        viewerFlags?: (number|null);

        /** BackupManga history */
        history?: (MihonObjectModel.IBackupHistory[]|null);

        /** BackupManga updateStrategy */
        updateStrategy?: (MihonObjectModel.UpdateStrategy|null);

        /** BackupManga lastModifiedAt */
        lastModifiedAt?: (number|Long|null);

        /** BackupManga favoriteModifiedAt */
        favoriteModifiedAt?: (number|Long|null);

        /** BackupManga excludedScanlators */
        excludedScanlators?: (string[]|null);

        /** BackupManga version */
        version?: (number|Long|null);
    }

    /** Represents a BackupManga. */
    class BackupManga implements IBackupManga {

        /**
         * Constructs a new BackupManga.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IBackupManga);

        /** BackupManga source. */
        public source: (number|Long);

        /** BackupManga url. */
        public url: string;

        /** BackupManga title. */
        public title: string;

        /** BackupManga artist. */
        public artist: string;

        /** BackupManga author. */
        public author: string;

        /** BackupManga description. */
        public description: string;

        /** BackupManga genre. */
        public genre: string[];

        /** BackupManga status. */
        public status: number;

        /** BackupManga thumbnailUrl. */
        public thumbnailUrl: string;

        /** BackupManga dateAdded. */
        public dateAdded: (number|Long);

        /** BackupManga viewer. */
        public viewer: number;

        /** BackupManga chapters. */
        public chapters: MihonObjectModel.IBackupChapter[];

        /** BackupManga categories. */
        public categories: (number|Long)[];

        /** BackupManga tracking. */
        public tracking: MihonObjectModel.IBackupTracking[];

        /** BackupManga favorite. */
        public favorite: boolean;

        /** BackupManga chapterFlags. */
        public chapterFlags: number;

        /** BackupManga viewerFlags. */
        public viewerFlags: number;

        /** BackupManga history. */
        public history: MihonObjectModel.IBackupHistory[];

        /** BackupManga updateStrategy. */
        public updateStrategy: MihonObjectModel.UpdateStrategy;

        /** BackupManga lastModifiedAt. */
        public lastModifiedAt: (number|Long);

        /** BackupManga favoriteModifiedAt. */
        public favoriteModifiedAt: (number|Long);

        /** BackupManga excludedScanlators. */
        public excludedScanlators: string[];

        /** BackupManga version. */
        public version: (number|Long);

        /**
         * Creates a new BackupManga instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupManga instance
         */
        public static create(properties?: MihonObjectModel.IBackupManga): MihonObjectModel.BackupManga;

        /**
         * Encodes the specified BackupManga message. Does not implicitly {@link MihonObjectModel.BackupManga.verify|verify} messages.
         * @param message BackupManga message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IBackupManga, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupManga message, length delimited. Does not implicitly {@link MihonObjectModel.BackupManga.verify|verify} messages.
         * @param message BackupManga message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IBackupManga, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupManga message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupManga
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.BackupManga;

        /**
         * Decodes a BackupManga message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupManga
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.BackupManga;

        /**
         * Verifies a BackupManga message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupManga message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupManga
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.BackupManga;

        /**
         * Creates a plain object from a BackupManga message. Also converts values to other types if specified.
         * @param message BackupManga
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.BackupManga, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupManga to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BackupManga
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BackupCategory. */
    interface IBackupCategory {

        /** BackupCategory name */
        name: string;

        /** BackupCategory order */
        order?: (number|Long|null);

        /** BackupCategory flags */
        flags?: (number|Long|null);
    }

    /** Represents a BackupCategory. */
    class BackupCategory implements IBackupCategory {

        /**
         * Constructs a new BackupCategory.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IBackupCategory);

        /** BackupCategory name. */
        public name: string;

        /** BackupCategory order. */
        public order: (number|Long);

        /** BackupCategory flags. */
        public flags: (number|Long);

        /**
         * Creates a new BackupCategory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupCategory instance
         */
        public static create(properties?: MihonObjectModel.IBackupCategory): MihonObjectModel.BackupCategory;

        /**
         * Encodes the specified BackupCategory message. Does not implicitly {@link MihonObjectModel.BackupCategory.verify|verify} messages.
         * @param message BackupCategory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IBackupCategory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupCategory message, length delimited. Does not implicitly {@link MihonObjectModel.BackupCategory.verify|verify} messages.
         * @param message BackupCategory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IBackupCategory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupCategory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupCategory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.BackupCategory;

        /**
         * Decodes a BackupCategory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupCategory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.BackupCategory;

        /**
         * Verifies a BackupCategory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupCategory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupCategory
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.BackupCategory;

        /**
         * Creates a plain object from a BackupCategory message. Also converts values to other types if specified.
         * @param message BackupCategory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.BackupCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupCategory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BackupCategory
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BackupSource. */
    interface IBackupSource {

        /** BackupSource name */
        name?: (string|null);

        /** BackupSource sourceId */
        sourceId: (number|Long);
    }

    /** Represents a BackupSource. */
    class BackupSource implements IBackupSource {

        /**
         * Constructs a new BackupSource.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IBackupSource);

        /** BackupSource name. */
        public name: string;

        /** BackupSource sourceId. */
        public sourceId: (number|Long);

        /**
         * Creates a new BackupSource instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupSource instance
         */
        public static create(properties?: MihonObjectModel.IBackupSource): MihonObjectModel.BackupSource;

        /**
         * Encodes the specified BackupSource message. Does not implicitly {@link MihonObjectModel.BackupSource.verify|verify} messages.
         * @param message BackupSource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IBackupSource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupSource message, length delimited. Does not implicitly {@link MihonObjectModel.BackupSource.verify|verify} messages.
         * @param message BackupSource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IBackupSource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupSource message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.BackupSource;

        /**
         * Decodes a BackupSource message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.BackupSource;

        /**
         * Verifies a BackupSource message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupSource message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupSource
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.BackupSource;

        /**
         * Creates a plain object from a BackupSource message. Also converts values to other types if specified.
         * @param message BackupSource
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.BackupSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupSource to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BackupSource
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BackupChapter. */
    interface IBackupChapter {

        /** BackupChapter url */
        url: string;

        /** BackupChapter name */
        name: string;

        /** BackupChapter scanlator */
        scanlator?: (string|null);

        /** BackupChapter read */
        read?: (boolean|null);

        /** BackupChapter bookmark */
        bookmark?: (boolean|null);

        /** BackupChapter lastPageRead */
        lastPageRead?: (number|Long|null);

        /** BackupChapter dateFetch */
        dateFetch?: (number|Long|null);

        /** BackupChapter dateUpload */
        dateUpload?: (number|Long|null);

        /** BackupChapter chapterNumber */
        chapterNumber?: (number|null);

        /** BackupChapter sourceOrder */
        sourceOrder?: (number|Long|null);

        /** BackupChapter lastModifiedAt */
        lastModifiedAt?: (number|Long|null);

        /** BackupChapter version */
        version?: (number|Long|null);
    }

    /** Represents a BackupChapter. */
    class BackupChapter implements IBackupChapter {

        /**
         * Constructs a new BackupChapter.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IBackupChapter);

        /** BackupChapter url. */
        public url: string;

        /** BackupChapter name. */
        public name: string;

        /** BackupChapter scanlator. */
        public scanlator: string;

        /** BackupChapter read. */
        public read: boolean;

        /** BackupChapter bookmark. */
        public bookmark: boolean;

        /** BackupChapter lastPageRead. */
        public lastPageRead: (number|Long);

        /** BackupChapter dateFetch. */
        public dateFetch: (number|Long);

        /** BackupChapter dateUpload. */
        public dateUpload: (number|Long);

        /** BackupChapter chapterNumber. */
        public chapterNumber: number;

        /** BackupChapter sourceOrder. */
        public sourceOrder: (number|Long);

        /** BackupChapter lastModifiedAt. */
        public lastModifiedAt: (number|Long);

        /** BackupChapter version. */
        public version: (number|Long);

        /**
         * Creates a new BackupChapter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupChapter instance
         */
        public static create(properties?: MihonObjectModel.IBackupChapter): MihonObjectModel.BackupChapter;

        /**
         * Encodes the specified BackupChapter message. Does not implicitly {@link MihonObjectModel.BackupChapter.verify|verify} messages.
         * @param message BackupChapter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IBackupChapter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupChapter message, length delimited. Does not implicitly {@link MihonObjectModel.BackupChapter.verify|verify} messages.
         * @param message BackupChapter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IBackupChapter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupChapter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupChapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.BackupChapter;

        /**
         * Decodes a BackupChapter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupChapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.BackupChapter;

        /**
         * Verifies a BackupChapter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupChapter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupChapter
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.BackupChapter;

        /**
         * Creates a plain object from a BackupChapter message. Also converts values to other types if specified.
         * @param message BackupChapter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.BackupChapter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupChapter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BackupChapter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BackupTracking. */
    interface IBackupTracking {

        /** BackupTracking syncId */
        syncId: number;

        /** BackupTracking libraryId */
        libraryId: (number|Long);

        /** BackupTracking mediaIdInt */
        mediaIdInt?: (number|null);

        /** BackupTracking trackingUrl */
        trackingUrl?: (string|null);

        /** BackupTracking title */
        title?: (string|null);

        /** BackupTracking lastChapterRead */
        lastChapterRead?: (number|null);

        /** BackupTracking totalChapters */
        totalChapters?: (number|null);

        /** BackupTracking score */
        score?: (number|null);

        /** BackupTracking status */
        status?: (number|null);

        /** BackupTracking startedReadingDate */
        startedReadingDate?: (number|Long|null);

        /** BackupTracking finishedReadingDate */
        finishedReadingDate?: (number|Long|null);

        /** BackupTracking mediaId */
        mediaId?: (number|Long|null);
    }

    /** Represents a BackupTracking. */
    class BackupTracking implements IBackupTracking {

        /**
         * Constructs a new BackupTracking.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IBackupTracking);

        /** BackupTracking syncId. */
        public syncId: number;

        /** BackupTracking libraryId. */
        public libraryId: (number|Long);

        /** BackupTracking mediaIdInt. */
        public mediaIdInt: number;

        /** BackupTracking trackingUrl. */
        public trackingUrl: string;

        /** BackupTracking title. */
        public title: string;

        /** BackupTracking lastChapterRead. */
        public lastChapterRead: number;

        /** BackupTracking totalChapters. */
        public totalChapters: number;

        /** BackupTracking score. */
        public score: number;

        /** BackupTracking status. */
        public status: number;

        /** BackupTracking startedReadingDate. */
        public startedReadingDate: (number|Long);

        /** BackupTracking finishedReadingDate. */
        public finishedReadingDate: (number|Long);

        /** BackupTracking mediaId. */
        public mediaId: (number|Long);

        /**
         * Creates a new BackupTracking instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupTracking instance
         */
        public static create(properties?: MihonObjectModel.IBackupTracking): MihonObjectModel.BackupTracking;

        /**
         * Encodes the specified BackupTracking message. Does not implicitly {@link MihonObjectModel.BackupTracking.verify|verify} messages.
         * @param message BackupTracking message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IBackupTracking, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupTracking message, length delimited. Does not implicitly {@link MihonObjectModel.BackupTracking.verify|verify} messages.
         * @param message BackupTracking message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IBackupTracking, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupTracking message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupTracking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.BackupTracking;

        /**
         * Decodes a BackupTracking message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupTracking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.BackupTracking;

        /**
         * Verifies a BackupTracking message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupTracking message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupTracking
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.BackupTracking;

        /**
         * Creates a plain object from a BackupTracking message. Also converts values to other types if specified.
         * @param message BackupTracking
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.BackupTracking, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupTracking to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BackupTracking
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BackupHistory. */
    interface IBackupHistory {

        /** BackupHistory url */
        url: string;

        /** BackupHistory lastRead */
        lastRead: (number|Long);

        /** BackupHistory readDuration */
        readDuration?: (number|Long|null);
    }

    /** Represents a BackupHistory. */
    class BackupHistory implements IBackupHistory {

        /**
         * Constructs a new BackupHistory.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IBackupHistory);

        /** BackupHistory url. */
        public url: string;

        /** BackupHistory lastRead. */
        public lastRead: (number|Long);

        /** BackupHistory readDuration. */
        public readDuration: (number|Long);

        /**
         * Creates a new BackupHistory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupHistory instance
         */
        public static create(properties?: MihonObjectModel.IBackupHistory): MihonObjectModel.BackupHistory;

        /**
         * Encodes the specified BackupHistory message. Does not implicitly {@link MihonObjectModel.BackupHistory.verify|verify} messages.
         * @param message BackupHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IBackupHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupHistory message, length delimited. Does not implicitly {@link MihonObjectModel.BackupHistory.verify|verify} messages.
         * @param message BackupHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IBackupHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupHistory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.BackupHistory;

        /**
         * Decodes a BackupHistory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.BackupHistory;

        /**
         * Verifies a BackupHistory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupHistory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupHistory
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.BackupHistory;

        /**
         * Creates a plain object from a BackupHistory message. Also converts values to other types if specified.
         * @param message BackupHistory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.BackupHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupHistory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BackupHistory
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** UpdateStrategy enum. */
    enum UpdateStrategy {
        ALWAYS_UPDATE = 0,
        ONLY_FETCH_ONCE = 1
    }

    /** Properties of a PreferenceValue. */
    interface IPreferenceValue {

        /** PreferenceValue type */
        type: string;

        /** PreferenceValue value */
        value: Uint8Array;
    }

    /** Represents a PreferenceValue. */
    class PreferenceValue implements IPreferenceValue {

        /**
         * Constructs a new PreferenceValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IPreferenceValue);

        /** PreferenceValue type. */
        public type: string;

        /** PreferenceValue value. */
        public value: Uint8Array;

        /**
         * Creates a new PreferenceValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreferenceValue instance
         */
        public static create(properties?: MihonObjectModel.IPreferenceValue): MihonObjectModel.PreferenceValue;

        /**
         * Encodes the specified PreferenceValue message. Does not implicitly {@link MihonObjectModel.PreferenceValue.verify|verify} messages.
         * @param message PreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.PreferenceValue.verify|verify} messages.
         * @param message PreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreferenceValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.PreferenceValue;

        /**
         * Decodes a PreferenceValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.PreferenceValue;

        /**
         * Verifies a PreferenceValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreferenceValue
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.PreferenceValue;

        /**
         * Creates a plain object from a PreferenceValue message. Also converts values to other types if specified.
         * @param message PreferenceValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.PreferenceValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreferenceValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PreferenceValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BooleanPreferenceValue. */
    interface IBooleanPreferenceValue {

        /** BooleanPreferenceValue value */
        value: boolean;
    }

    /** Represents a BooleanPreferenceValue. */
    class BooleanPreferenceValue implements IBooleanPreferenceValue {

        /**
         * Constructs a new BooleanPreferenceValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IBooleanPreferenceValue);

        /** BooleanPreferenceValue value. */
        public value: boolean;

        /**
         * Creates a new BooleanPreferenceValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BooleanPreferenceValue instance
         */
        public static create(properties?: MihonObjectModel.IBooleanPreferenceValue): MihonObjectModel.BooleanPreferenceValue;

        /**
         * Encodes the specified BooleanPreferenceValue message. Does not implicitly {@link MihonObjectModel.BooleanPreferenceValue.verify|verify} messages.
         * @param message BooleanPreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IBooleanPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BooleanPreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.BooleanPreferenceValue.verify|verify} messages.
         * @param message BooleanPreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IBooleanPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BooleanPreferenceValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BooleanPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.BooleanPreferenceValue;

        /**
         * Decodes a BooleanPreferenceValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BooleanPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.BooleanPreferenceValue;

        /**
         * Verifies a BooleanPreferenceValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BooleanPreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BooleanPreferenceValue
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.BooleanPreferenceValue;

        /**
         * Creates a plain object from a BooleanPreferenceValue message. Also converts values to other types if specified.
         * @param message BooleanPreferenceValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.BooleanPreferenceValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BooleanPreferenceValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BooleanPreferenceValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FloatPreferenceValue. */
    interface IFloatPreferenceValue {

        /** FloatPreferenceValue value */
        value: number;
    }

    /** Represents a FloatPreferenceValue. */
    class FloatPreferenceValue implements IFloatPreferenceValue {

        /**
         * Constructs a new FloatPreferenceValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IFloatPreferenceValue);

        /** FloatPreferenceValue value. */
        public value: number;

        /**
         * Creates a new FloatPreferenceValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FloatPreferenceValue instance
         */
        public static create(properties?: MihonObjectModel.IFloatPreferenceValue): MihonObjectModel.FloatPreferenceValue;

        /**
         * Encodes the specified FloatPreferenceValue message. Does not implicitly {@link MihonObjectModel.FloatPreferenceValue.verify|verify} messages.
         * @param message FloatPreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IFloatPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FloatPreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.FloatPreferenceValue.verify|verify} messages.
         * @param message FloatPreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IFloatPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FloatPreferenceValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FloatPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.FloatPreferenceValue;

        /**
         * Decodes a FloatPreferenceValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FloatPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.FloatPreferenceValue;

        /**
         * Verifies a FloatPreferenceValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FloatPreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FloatPreferenceValue
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.FloatPreferenceValue;

        /**
         * Creates a plain object from a FloatPreferenceValue message. Also converts values to other types if specified.
         * @param message FloatPreferenceValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.FloatPreferenceValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FloatPreferenceValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FloatPreferenceValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IntPreferenceValue. */
    interface IIntPreferenceValue {

        /** IntPreferenceValue value */
        value: number;
    }

    /** Represents an IntPreferenceValue. */
    class IntPreferenceValue implements IIntPreferenceValue {

        /**
         * Constructs a new IntPreferenceValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IIntPreferenceValue);

        /** IntPreferenceValue value. */
        public value: number;

        /**
         * Creates a new IntPreferenceValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntPreferenceValue instance
         */
        public static create(properties?: MihonObjectModel.IIntPreferenceValue): MihonObjectModel.IntPreferenceValue;

        /**
         * Encodes the specified IntPreferenceValue message. Does not implicitly {@link MihonObjectModel.IntPreferenceValue.verify|verify} messages.
         * @param message IntPreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IIntPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IntPreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.IntPreferenceValue.verify|verify} messages.
         * @param message IntPreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IIntPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntPreferenceValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.IntPreferenceValue;

        /**
         * Decodes an IntPreferenceValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.IntPreferenceValue;

        /**
         * Verifies an IntPreferenceValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IntPreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IntPreferenceValue
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.IntPreferenceValue;

        /**
         * Creates a plain object from an IntPreferenceValue message. Also converts values to other types if specified.
         * @param message IntPreferenceValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.IntPreferenceValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IntPreferenceValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IntPreferenceValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LongPreferenceValue. */
    interface ILongPreferenceValue {

        /** LongPreferenceValue value */
        value: (number|Long);
    }

    /** Represents a LongPreferenceValue. */
    class LongPreferenceValue implements ILongPreferenceValue {

        /**
         * Constructs a new LongPreferenceValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.ILongPreferenceValue);

        /** LongPreferenceValue value. */
        public value: (number|Long);

        /**
         * Creates a new LongPreferenceValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LongPreferenceValue instance
         */
        public static create(properties?: MihonObjectModel.ILongPreferenceValue): MihonObjectModel.LongPreferenceValue;

        /**
         * Encodes the specified LongPreferenceValue message. Does not implicitly {@link MihonObjectModel.LongPreferenceValue.verify|verify} messages.
         * @param message LongPreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.ILongPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LongPreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.LongPreferenceValue.verify|verify} messages.
         * @param message LongPreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.ILongPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LongPreferenceValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LongPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.LongPreferenceValue;

        /**
         * Decodes a LongPreferenceValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LongPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.LongPreferenceValue;

        /**
         * Verifies a LongPreferenceValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LongPreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LongPreferenceValue
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.LongPreferenceValue;

        /**
         * Creates a plain object from a LongPreferenceValue message. Also converts values to other types if specified.
         * @param message LongPreferenceValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.LongPreferenceValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LongPreferenceValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LongPreferenceValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StringPreferenceValue. */
    interface IStringPreferenceValue {

        /** StringPreferenceValue value */
        value: string;
    }

    /** Represents a StringPreferenceValue. */
    class StringPreferenceValue implements IStringPreferenceValue {

        /**
         * Constructs a new StringPreferenceValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IStringPreferenceValue);

        /** StringPreferenceValue value. */
        public value: string;

        /**
         * Creates a new StringPreferenceValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringPreferenceValue instance
         */
        public static create(properties?: MihonObjectModel.IStringPreferenceValue): MihonObjectModel.StringPreferenceValue;

        /**
         * Encodes the specified StringPreferenceValue message. Does not implicitly {@link MihonObjectModel.StringPreferenceValue.verify|verify} messages.
         * @param message StringPreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IStringPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringPreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.StringPreferenceValue.verify|verify} messages.
         * @param message StringPreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IStringPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringPreferenceValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.StringPreferenceValue;

        /**
         * Decodes a StringPreferenceValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.StringPreferenceValue;

        /**
         * Verifies a StringPreferenceValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StringPreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringPreferenceValue
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.StringPreferenceValue;

        /**
         * Creates a plain object from a StringPreferenceValue message. Also converts values to other types if specified.
         * @param message StringPreferenceValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.StringPreferenceValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringPreferenceValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StringPreferenceValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StringSetPreferenceValue. */
    interface IStringSetPreferenceValue {

        /** StringSetPreferenceValue value */
        value?: (string[]|null);
    }

    /** Represents a StringSetPreferenceValue. */
    class StringSetPreferenceValue implements IStringSetPreferenceValue {

        /**
         * Constructs a new StringSetPreferenceValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: MihonObjectModel.IStringSetPreferenceValue);

        /** StringSetPreferenceValue value. */
        public value: string[];

        /**
         * Creates a new StringSetPreferenceValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringSetPreferenceValue instance
         */
        public static create(properties?: MihonObjectModel.IStringSetPreferenceValue): MihonObjectModel.StringSetPreferenceValue;

        /**
         * Encodes the specified StringSetPreferenceValue message. Does not implicitly {@link MihonObjectModel.StringSetPreferenceValue.verify|verify} messages.
         * @param message StringSetPreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MihonObjectModel.IStringSetPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringSetPreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.StringSetPreferenceValue.verify|verify} messages.
         * @param message StringSetPreferenceValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MihonObjectModel.IStringSetPreferenceValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringSetPreferenceValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringSetPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MihonObjectModel.StringSetPreferenceValue;

        /**
         * Decodes a StringSetPreferenceValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringSetPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MihonObjectModel.StringSetPreferenceValue;

        /**
         * Verifies a StringSetPreferenceValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StringSetPreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringSetPreferenceValue
         */
        public static fromObject(object: { [k: string]: any }): MihonObjectModel.StringSetPreferenceValue;

        /**
         * Creates a plain object from a StringSetPreferenceValue message. Also converts values to other types if specified.
         * @param message StringSetPreferenceValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MihonObjectModel.StringSetPreferenceValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringSetPreferenceValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StringSetPreferenceValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
