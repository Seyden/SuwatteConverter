/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.MihonObjectModel = (function() {

    /**
     * Namespace MihonObjectModel.
     * @exports MihonObjectModel
     * @namespace
     */
    var MihonObjectModel = {};

    MihonObjectModel.Backup = (function() {

        /**
         * Properties of a Backup.
         * @memberof MihonObjectModel
         * @interface IBackup
         * @property {Array.<MihonObjectModel.IBackupManga>|null} [backupManga] Backup backupManga
         * @property {Array.<MihonObjectModel.IBackupCategory>|null} [backupCategories] Backup backupCategories
         * @property {Array.<MihonObjectModel.IBackupSource>|null} [backupSources] Backup backupSources
         */

        /**
         * Constructs a new Backup.
         * @memberof MihonObjectModel
         * @classdesc Represents a Backup.
         * @implements IBackup
         * @constructor
         * @param {MihonObjectModel.IBackup=} [properties] Properties to set
         */
        function Backup(properties) {
            this.backupManga = [];
            this.backupCategories = [];
            this.backupSources = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Backup backupManga.
         * @member {Array.<MihonObjectModel.IBackupManga>} backupManga
         * @memberof MihonObjectModel.Backup
         * @instance
         */
        Backup.prototype.backupManga = $util.emptyArray;

        /**
         * Backup backupCategories.
         * @member {Array.<MihonObjectModel.IBackupCategory>} backupCategories
         * @memberof MihonObjectModel.Backup
         * @instance
         */
        Backup.prototype.backupCategories = $util.emptyArray;

        /**
         * Backup backupSources.
         * @member {Array.<MihonObjectModel.IBackupSource>} backupSources
         * @memberof MihonObjectModel.Backup
         * @instance
         */
        Backup.prototype.backupSources = $util.emptyArray;

        /**
         * Creates a new Backup instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.Backup
         * @static
         * @param {MihonObjectModel.IBackup=} [properties] Properties to set
         * @returns {MihonObjectModel.Backup} Backup instance
         */
        Backup.create = function create(properties) {
            return new Backup(properties);
        };

        /**
         * Encodes the specified Backup message. Does not implicitly {@link MihonObjectModel.Backup.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.Backup
         * @static
         * @param {MihonObjectModel.IBackup} message Backup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Backup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.backupManga != null && message.backupManga.length)
                for (var i = 0; i < message.backupManga.length; ++i)
                    $root.MihonObjectModel.BackupManga.encode(message.backupManga[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.backupCategories != null && message.backupCategories.length)
                for (var i = 0; i < message.backupCategories.length; ++i)
                    $root.MihonObjectModel.BackupCategory.encode(message.backupCategories[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.backupSources != null && message.backupSources.length)
                for (var i = 0; i < message.backupSources.length; ++i)
                    $root.MihonObjectModel.BackupSource.encode(message.backupSources[i], writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Backup message, length delimited. Does not implicitly {@link MihonObjectModel.Backup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.Backup
         * @static
         * @param {MihonObjectModel.IBackup} message Backup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Backup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Backup message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.Backup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.Backup} Backup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Backup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.Backup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.backupManga && message.backupManga.length))
                            message.backupManga = [];
                        message.backupManga.push($root.MihonObjectModel.BackupManga.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.backupCategories && message.backupCategories.length))
                            message.backupCategories = [];
                        message.backupCategories.push($root.MihonObjectModel.BackupCategory.decode(reader, reader.uint32()));
                        break;
                    }
                case 101: {
                        if (!(message.backupSources && message.backupSources.length))
                            message.backupSources = [];
                        message.backupSources.push($root.MihonObjectModel.BackupSource.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Backup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.Backup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.Backup} Backup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Backup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Backup message.
         * @function verify
         * @memberof MihonObjectModel.Backup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Backup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.backupManga != null && message.hasOwnProperty("backupManga")) {
                if (!Array.isArray(message.backupManga))
                    return "backupManga: array expected";
                for (var i = 0; i < message.backupManga.length; ++i) {
                    var error = $root.MihonObjectModel.BackupManga.verify(message.backupManga[i]);
                    if (error)
                        return "backupManga." + error;
                }
            }
            if (message.backupCategories != null && message.hasOwnProperty("backupCategories")) {
                if (!Array.isArray(message.backupCategories))
                    return "backupCategories: array expected";
                for (var i = 0; i < message.backupCategories.length; ++i) {
                    var error = $root.MihonObjectModel.BackupCategory.verify(message.backupCategories[i]);
                    if (error)
                        return "backupCategories." + error;
                }
            }
            if (message.backupSources != null && message.hasOwnProperty("backupSources")) {
                if (!Array.isArray(message.backupSources))
                    return "backupSources: array expected";
                for (var i = 0; i < message.backupSources.length; ++i) {
                    var error = $root.MihonObjectModel.BackupSource.verify(message.backupSources[i]);
                    if (error)
                        return "backupSources." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Backup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.Backup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.Backup} Backup
         */
        Backup.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.Backup)
                return object;
            var message = new $root.MihonObjectModel.Backup();
            if (object.backupManga) {
                if (!Array.isArray(object.backupManga))
                    throw TypeError(".MihonObjectModel.Backup.backupManga: array expected");
                message.backupManga = [];
                for (var i = 0; i < object.backupManga.length; ++i) {
                    if (typeof object.backupManga[i] !== "object")
                        throw TypeError(".MihonObjectModel.Backup.backupManga: object expected");
                    message.backupManga[i] = $root.MihonObjectModel.BackupManga.fromObject(object.backupManga[i]);
                }
            }
            if (object.backupCategories) {
                if (!Array.isArray(object.backupCategories))
                    throw TypeError(".MihonObjectModel.Backup.backupCategories: array expected");
                message.backupCategories = [];
                for (var i = 0; i < object.backupCategories.length; ++i) {
                    if (typeof object.backupCategories[i] !== "object")
                        throw TypeError(".MihonObjectModel.Backup.backupCategories: object expected");
                    message.backupCategories[i] = $root.MihonObjectModel.BackupCategory.fromObject(object.backupCategories[i]);
                }
            }
            if (object.backupSources) {
                if (!Array.isArray(object.backupSources))
                    throw TypeError(".MihonObjectModel.Backup.backupSources: array expected");
                message.backupSources = [];
                for (var i = 0; i < object.backupSources.length; ++i) {
                    if (typeof object.backupSources[i] !== "object")
                        throw TypeError(".MihonObjectModel.Backup.backupSources: object expected");
                    message.backupSources[i] = $root.MihonObjectModel.BackupSource.fromObject(object.backupSources[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Backup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.Backup
         * @static
         * @param {MihonObjectModel.Backup} message Backup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Backup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.backupManga = [];
                object.backupCategories = [];
                object.backupSources = [];
            }
            if (message.backupManga && message.backupManga.length) {
                object.backupManga = [];
                for (var j = 0; j < message.backupManga.length; ++j)
                    object.backupManga[j] = $root.MihonObjectModel.BackupManga.toObject(message.backupManga[j], options);
            }
            if (message.backupCategories && message.backupCategories.length) {
                object.backupCategories = [];
                for (var j = 0; j < message.backupCategories.length; ++j)
                    object.backupCategories[j] = $root.MihonObjectModel.BackupCategory.toObject(message.backupCategories[j], options);
            }
            if (message.backupSources && message.backupSources.length) {
                object.backupSources = [];
                for (var j = 0; j < message.backupSources.length; ++j)
                    object.backupSources[j] = $root.MihonObjectModel.BackupSource.toObject(message.backupSources[j], options);
            }
            return object;
        };

        /**
         * Converts this Backup to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.Backup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Backup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Backup
         * @function getTypeUrl
         * @memberof MihonObjectModel.Backup
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Backup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.Backup";
        };

        return Backup;
    })();

    MihonObjectModel.BackupManga = (function() {

        /**
         * Properties of a BackupManga.
         * @memberof MihonObjectModel
         * @interface IBackupManga
         * @property {number|Long} source BackupManga source
         * @property {string} url BackupManga url
         * @property {string|null} [title] BackupManga title
         * @property {string|null} [artist] BackupManga artist
         * @property {string|null} [author] BackupManga author
         * @property {string|null} [description] BackupManga description
         * @property {Array.<string>|null} [genre] BackupManga genre
         * @property {number|null} [status] BackupManga status
         * @property {string|null} [thumbnailUrl] BackupManga thumbnailUrl
         * @property {number|Long|null} [dateAdded] BackupManga dateAdded
         * @property {number|null} [viewer] BackupManga viewer
         * @property {Array.<MihonObjectModel.IBackupChapter>|null} [chapters] BackupManga chapters
         * @property {Array.<number|Long>|null} [categories] BackupManga categories
         * @property {Array.<MihonObjectModel.IBackupTracking>|null} [tracking] BackupManga tracking
         * @property {boolean|null} [favorite] BackupManga favorite
         * @property {number|null} [chapterFlags] BackupManga chapterFlags
         * @property {number|null} [viewerFlags] BackupManga viewerFlags
         * @property {Array.<MihonObjectModel.IBackupHistory>|null} [history] BackupManga history
         * @property {MihonObjectModel.UpdateStrategy|null} [updateStrategy] BackupManga updateStrategy
         * @property {number|Long|null} [lastModifiedAt] BackupManga lastModifiedAt
         * @property {number|Long|null} [favoriteModifiedAt] BackupManga favoriteModifiedAt
         * @property {Array.<string>|null} [excludedScanlators] BackupManga excludedScanlators
         * @property {number|Long|null} [version] BackupManga version
         */

        /**
         * Constructs a new BackupManga.
         * @memberof MihonObjectModel
         * @classdesc Represents a BackupManga.
         * @implements IBackupManga
         * @constructor
         * @param {MihonObjectModel.IBackupManga=} [properties] Properties to set
         */
        function BackupManga(properties) {
            this.genre = [];
            this.chapters = [];
            this.categories = [];
            this.tracking = [];
            this.history = [];
            this.excludedScanlators = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackupManga source.
         * @member {number|Long} source
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.source = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupManga url.
         * @member {string} url
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.url = "";

        /**
         * BackupManga title.
         * @member {string} title
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.title = "";

        /**
         * BackupManga artist.
         * @member {string} artist
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.artist = "";

        /**
         * BackupManga author.
         * @member {string} author
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.author = "";

        /**
         * BackupManga description.
         * @member {string} description
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.description = "";

        /**
         * BackupManga genre.
         * @member {Array.<string>} genre
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.genre = $util.emptyArray;

        /**
         * BackupManga status.
         * @member {number} status
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.status = 0;

        /**
         * BackupManga thumbnailUrl.
         * @member {string} thumbnailUrl
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.thumbnailUrl = "";

        /**
         * BackupManga dateAdded.
         * @member {number|Long} dateAdded
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.dateAdded = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupManga viewer.
         * @member {number} viewer
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.viewer = 0;

        /**
         * BackupManga chapters.
         * @member {Array.<MihonObjectModel.IBackupChapter>} chapters
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.chapters = $util.emptyArray;

        /**
         * BackupManga categories.
         * @member {Array.<number|Long>} categories
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.categories = $util.emptyArray;

        /**
         * BackupManga tracking.
         * @member {Array.<MihonObjectModel.IBackupTracking>} tracking
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.tracking = $util.emptyArray;

        /**
         * BackupManga favorite.
         * @member {boolean} favorite
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.favorite = false;

        /**
         * BackupManga chapterFlags.
         * @member {number} chapterFlags
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.chapterFlags = 0;

        /**
         * BackupManga viewerFlags.
         * @member {number} viewerFlags
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.viewerFlags = 0;

        /**
         * BackupManga history.
         * @member {Array.<MihonObjectModel.IBackupHistory>} history
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.history = $util.emptyArray;

        /**
         * BackupManga updateStrategy.
         * @member {MihonObjectModel.UpdateStrategy} updateStrategy
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.updateStrategy = 0;

        /**
         * BackupManga lastModifiedAt.
         * @member {number|Long} lastModifiedAt
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.lastModifiedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupManga favoriteModifiedAt.
         * @member {number|Long} favoriteModifiedAt
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.favoriteModifiedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupManga excludedScanlators.
         * @member {Array.<string>} excludedScanlators
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.excludedScanlators = $util.emptyArray;

        /**
         * BackupManga version.
         * @member {number|Long} version
         * @memberof MihonObjectModel.BackupManga
         * @instance
         */
        BackupManga.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BackupManga instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.BackupManga
         * @static
         * @param {MihonObjectModel.IBackupManga=} [properties] Properties to set
         * @returns {MihonObjectModel.BackupManga} BackupManga instance
         */
        BackupManga.create = function create(properties) {
            return new BackupManga(properties);
        };

        /**
         * Encodes the specified BackupManga message. Does not implicitly {@link MihonObjectModel.BackupManga.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.BackupManga
         * @static
         * @param {MihonObjectModel.IBackupManga} message BackupManga message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupManga.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.source);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.artist != null && Object.hasOwnProperty.call(message, "artist"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.artist);
            if (message.author != null && Object.hasOwnProperty.call(message, "author"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.author);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.description);
            if (message.genre != null && message.genre.length)
                for (var i = 0; i < message.genre.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.genre[i]);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.status);
            if (message.thumbnailUrl != null && Object.hasOwnProperty.call(message, "thumbnailUrl"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.thumbnailUrl);
            if (message.dateAdded != null && Object.hasOwnProperty.call(message, "dateAdded"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.dateAdded);
            if (message.viewer != null && Object.hasOwnProperty.call(message, "viewer"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.viewer);
            if (message.chapters != null && message.chapters.length)
                for (var i = 0; i < message.chapters.length; ++i)
                    $root.MihonObjectModel.BackupChapter.encode(message.chapters[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.categories != null && message.categories.length)
                for (var i = 0; i < message.categories.length; ++i)
                    writer.uint32(/* id 17, wireType 0 =*/136).int64(message.categories[i]);
            if (message.tracking != null && message.tracking.length)
                for (var i = 0; i < message.tracking.length; ++i)
                    $root.MihonObjectModel.BackupTracking.encode(message.tracking[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.favorite != null && Object.hasOwnProperty.call(message, "favorite"))
                writer.uint32(/* id 100, wireType 0 =*/800).bool(message.favorite);
            if (message.chapterFlags != null && Object.hasOwnProperty.call(message, "chapterFlags"))
                writer.uint32(/* id 101, wireType 0 =*/808).int32(message.chapterFlags);
            if (message.viewerFlags != null && Object.hasOwnProperty.call(message, "viewerFlags"))
                writer.uint32(/* id 103, wireType 0 =*/824).int32(message.viewerFlags);
            if (message.history != null && message.history.length)
                for (var i = 0; i < message.history.length; ++i)
                    $root.MihonObjectModel.BackupHistory.encode(message.history[i], writer.uint32(/* id 104, wireType 2 =*/834).fork()).ldelim();
            if (message.updateStrategy != null && Object.hasOwnProperty.call(message, "updateStrategy"))
                writer.uint32(/* id 105, wireType 0 =*/840).int32(message.updateStrategy);
            if (message.lastModifiedAt != null && Object.hasOwnProperty.call(message, "lastModifiedAt"))
                writer.uint32(/* id 106, wireType 0 =*/848).int64(message.lastModifiedAt);
            if (message.favoriteModifiedAt != null && Object.hasOwnProperty.call(message, "favoriteModifiedAt"))
                writer.uint32(/* id 107, wireType 0 =*/856).int64(message.favoriteModifiedAt);
            if (message.excludedScanlators != null && message.excludedScanlators.length)
                for (var i = 0; i < message.excludedScanlators.length; ++i)
                    writer.uint32(/* id 108, wireType 2 =*/866).string(message.excludedScanlators[i]);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 109, wireType 0 =*/872).int64(message.version);
            return writer;
        };

        /**
         * Encodes the specified BackupManga message, length delimited. Does not implicitly {@link MihonObjectModel.BackupManga.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.BackupManga
         * @static
         * @param {MihonObjectModel.IBackupManga} message BackupManga message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupManga.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackupManga message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.BackupManga
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.BackupManga} BackupManga
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupManga.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.BackupManga();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.source = reader.int64();
                        break;
                    }
                case 2: {
                        message.url = reader.string();
                        break;
                    }
                case 3: {
                        message.title = reader.string();
                        break;
                    }
                case 4: {
                        message.artist = reader.string();
                        break;
                    }
                case 5: {
                        message.author = reader.string();
                        break;
                    }
                case 6: {
                        message.description = reader.string();
                        break;
                    }
                case 7: {
                        if (!(message.genre && message.genre.length))
                            message.genre = [];
                        message.genre.push(reader.string());
                        break;
                    }
                case 8: {
                        message.status = reader.int32();
                        break;
                    }
                case 9: {
                        message.thumbnailUrl = reader.string();
                        break;
                    }
                case 13: {
                        message.dateAdded = reader.int64();
                        break;
                    }
                case 14: {
                        message.viewer = reader.int32();
                        break;
                    }
                case 16: {
                        if (!(message.chapters && message.chapters.length))
                            message.chapters = [];
                        message.chapters.push($root.MihonObjectModel.BackupChapter.decode(reader, reader.uint32()));
                        break;
                    }
                case 17: {
                        if (!(message.categories && message.categories.length))
                            message.categories = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.categories.push(reader.int64());
                        } else
                            message.categories.push(reader.int64());
                        break;
                    }
                case 18: {
                        if (!(message.tracking && message.tracking.length))
                            message.tracking = [];
                        message.tracking.push($root.MihonObjectModel.BackupTracking.decode(reader, reader.uint32()));
                        break;
                    }
                case 100: {
                        message.favorite = reader.bool();
                        break;
                    }
                case 101: {
                        message.chapterFlags = reader.int32();
                        break;
                    }
                case 103: {
                        message.viewerFlags = reader.int32();
                        break;
                    }
                case 104: {
                        if (!(message.history && message.history.length))
                            message.history = [];
                        message.history.push($root.MihonObjectModel.BackupHistory.decode(reader, reader.uint32()));
                        break;
                    }
                case 105: {
                        message.updateStrategy = reader.int32();
                        break;
                    }
                case 106: {
                        message.lastModifiedAt = reader.int64();
                        break;
                    }
                case 107: {
                        message.favoriteModifiedAt = reader.int64();
                        break;
                    }
                case 108: {
                        if (!(message.excludedScanlators && message.excludedScanlators.length))
                            message.excludedScanlators = [];
                        message.excludedScanlators.push(reader.string());
                        break;
                    }
                case 109: {
                        message.version = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("source"))
                throw $util.ProtocolError("missing required 'source'", { instance: message });
            if (!message.hasOwnProperty("url"))
                throw $util.ProtocolError("missing required 'url'", { instance: message });
            return message;
        };

        /**
         * Decodes a BackupManga message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.BackupManga
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.BackupManga} BackupManga
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupManga.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackupManga message.
         * @function verify
         * @memberof MihonObjectModel.BackupManga
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackupManga.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.source) && !(message.source && $util.isInteger(message.source.low) && $util.isInteger(message.source.high)))
                return "source: integer|Long expected";
            if (!$util.isString(message.url))
                return "url: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.artist != null && message.hasOwnProperty("artist"))
                if (!$util.isString(message.artist))
                    return "artist: string expected";
            if (message.author != null && message.hasOwnProperty("author"))
                if (!$util.isString(message.author))
                    return "author: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.genre != null && message.hasOwnProperty("genre")) {
                if (!Array.isArray(message.genre))
                    return "genre: array expected";
                for (var i = 0; i < message.genre.length; ++i)
                    if (!$util.isString(message.genre[i]))
                        return "genre: string[] expected";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.thumbnailUrl != null && message.hasOwnProperty("thumbnailUrl"))
                if (!$util.isString(message.thumbnailUrl))
                    return "thumbnailUrl: string expected";
            if (message.dateAdded != null && message.hasOwnProperty("dateAdded"))
                if (!$util.isInteger(message.dateAdded) && !(message.dateAdded && $util.isInteger(message.dateAdded.low) && $util.isInteger(message.dateAdded.high)))
                    return "dateAdded: integer|Long expected";
            if (message.viewer != null && message.hasOwnProperty("viewer"))
                if (!$util.isInteger(message.viewer))
                    return "viewer: integer expected";
            if (message.chapters != null && message.hasOwnProperty("chapters")) {
                if (!Array.isArray(message.chapters))
                    return "chapters: array expected";
                for (var i = 0; i < message.chapters.length; ++i) {
                    var error = $root.MihonObjectModel.BackupChapter.verify(message.chapters[i]);
                    if (error)
                        return "chapters." + error;
                }
            }
            if (message.categories != null && message.hasOwnProperty("categories")) {
                if (!Array.isArray(message.categories))
                    return "categories: array expected";
                for (var i = 0; i < message.categories.length; ++i)
                    if (!$util.isInteger(message.categories[i]) && !(message.categories[i] && $util.isInteger(message.categories[i].low) && $util.isInteger(message.categories[i].high)))
                        return "categories: integer|Long[] expected";
            }
            if (message.tracking != null && message.hasOwnProperty("tracking")) {
                if (!Array.isArray(message.tracking))
                    return "tracking: array expected";
                for (var i = 0; i < message.tracking.length; ++i) {
                    var error = $root.MihonObjectModel.BackupTracking.verify(message.tracking[i]);
                    if (error)
                        return "tracking." + error;
                }
            }
            if (message.favorite != null && message.hasOwnProperty("favorite"))
                if (typeof message.favorite !== "boolean")
                    return "favorite: boolean expected";
            if (message.chapterFlags != null && message.hasOwnProperty("chapterFlags"))
                if (!$util.isInteger(message.chapterFlags))
                    return "chapterFlags: integer expected";
            if (message.viewerFlags != null && message.hasOwnProperty("viewerFlags"))
                if (!$util.isInteger(message.viewerFlags))
                    return "viewerFlags: integer expected";
            if (message.history != null && message.hasOwnProperty("history")) {
                if (!Array.isArray(message.history))
                    return "history: array expected";
                for (var i = 0; i < message.history.length; ++i) {
                    var error = $root.MihonObjectModel.BackupHistory.verify(message.history[i]);
                    if (error)
                        return "history." + error;
                }
            }
            if (message.updateStrategy != null && message.hasOwnProperty("updateStrategy"))
                switch (message.updateStrategy) {
                default:
                    return "updateStrategy: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.lastModifiedAt != null && message.hasOwnProperty("lastModifiedAt"))
                if (!$util.isInteger(message.lastModifiedAt) && !(message.lastModifiedAt && $util.isInteger(message.lastModifiedAt.low) && $util.isInteger(message.lastModifiedAt.high)))
                    return "lastModifiedAt: integer|Long expected";
            if (message.favoriteModifiedAt != null && message.hasOwnProperty("favoriteModifiedAt"))
                if (!$util.isInteger(message.favoriteModifiedAt) && !(message.favoriteModifiedAt && $util.isInteger(message.favoriteModifiedAt.low) && $util.isInteger(message.favoriteModifiedAt.high)))
                    return "favoriteModifiedAt: integer|Long expected";
            if (message.excludedScanlators != null && message.hasOwnProperty("excludedScanlators")) {
                if (!Array.isArray(message.excludedScanlators))
                    return "excludedScanlators: array expected";
                for (var i = 0; i < message.excludedScanlators.length; ++i)
                    if (!$util.isString(message.excludedScanlators[i]))
                        return "excludedScanlators: string[] expected";
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            return null;
        };

        /**
         * Creates a BackupManga message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.BackupManga
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.BackupManga} BackupManga
         */
        BackupManga.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.BackupManga)
                return object;
            var message = new $root.MihonObjectModel.BackupManga();
            if (object.source != null)
                if ($util.Long)
                    (message.source = $util.Long.fromValue(object.source)).unsigned = false;
                else if (typeof object.source === "string")
                    message.source = parseInt(object.source, 10);
                else if (typeof object.source === "number")
                    message.source = object.source;
                else if (typeof object.source === "object")
                    message.source = new $util.LongBits(object.source.low >>> 0, object.source.high >>> 0).toNumber();
            if (object.url != null)
                message.url = String(object.url);
            if (object.title != null)
                message.title = String(object.title);
            if (object.artist != null)
                message.artist = String(object.artist);
            if (object.author != null)
                message.author = String(object.author);
            if (object.description != null)
                message.description = String(object.description);
            if (object.genre) {
                if (!Array.isArray(object.genre))
                    throw TypeError(".MihonObjectModel.BackupManga.genre: array expected");
                message.genre = [];
                for (var i = 0; i < object.genre.length; ++i)
                    message.genre[i] = String(object.genre[i]);
            }
            if (object.status != null)
                message.status = object.status | 0;
            if (object.thumbnailUrl != null)
                message.thumbnailUrl = String(object.thumbnailUrl);
            if (object.dateAdded != null)
                if ($util.Long)
                    (message.dateAdded = $util.Long.fromValue(object.dateAdded)).unsigned = false;
                else if (typeof object.dateAdded === "string")
                    message.dateAdded = parseInt(object.dateAdded, 10);
                else if (typeof object.dateAdded === "number")
                    message.dateAdded = object.dateAdded;
                else if (typeof object.dateAdded === "object")
                    message.dateAdded = new $util.LongBits(object.dateAdded.low >>> 0, object.dateAdded.high >>> 0).toNumber();
            if (object.viewer != null)
                message.viewer = object.viewer | 0;
            if (object.chapters) {
                if (!Array.isArray(object.chapters))
                    throw TypeError(".MihonObjectModel.BackupManga.chapters: array expected");
                message.chapters = [];
                for (var i = 0; i < object.chapters.length; ++i) {
                    if (typeof object.chapters[i] !== "object")
                        throw TypeError(".MihonObjectModel.BackupManga.chapters: object expected");
                    message.chapters[i] = $root.MihonObjectModel.BackupChapter.fromObject(object.chapters[i]);
                }
            }
            if (object.categories) {
                if (!Array.isArray(object.categories))
                    throw TypeError(".MihonObjectModel.BackupManga.categories: array expected");
                message.categories = [];
                for (var i = 0; i < object.categories.length; ++i)
                    if ($util.Long)
                        (message.categories[i] = $util.Long.fromValue(object.categories[i])).unsigned = false;
                    else if (typeof object.categories[i] === "string")
                        message.categories[i] = parseInt(object.categories[i], 10);
                    else if (typeof object.categories[i] === "number")
                        message.categories[i] = object.categories[i];
                    else if (typeof object.categories[i] === "object")
                        message.categories[i] = new $util.LongBits(object.categories[i].low >>> 0, object.categories[i].high >>> 0).toNumber();
            }
            if (object.tracking) {
                if (!Array.isArray(object.tracking))
                    throw TypeError(".MihonObjectModel.BackupManga.tracking: array expected");
                message.tracking = [];
                for (var i = 0; i < object.tracking.length; ++i) {
                    if (typeof object.tracking[i] !== "object")
                        throw TypeError(".MihonObjectModel.BackupManga.tracking: object expected");
                    message.tracking[i] = $root.MihonObjectModel.BackupTracking.fromObject(object.tracking[i]);
                }
            }
            if (object.favorite != null)
                message.favorite = Boolean(object.favorite);
            if (object.chapterFlags != null)
                message.chapterFlags = object.chapterFlags | 0;
            if (object.viewerFlags != null)
                message.viewerFlags = object.viewerFlags | 0;
            if (object.history) {
                if (!Array.isArray(object.history))
                    throw TypeError(".MihonObjectModel.BackupManga.history: array expected");
                message.history = [];
                for (var i = 0; i < object.history.length; ++i) {
                    if (typeof object.history[i] !== "object")
                        throw TypeError(".MihonObjectModel.BackupManga.history: object expected");
                    message.history[i] = $root.MihonObjectModel.BackupHistory.fromObject(object.history[i]);
                }
            }
            switch (object.updateStrategy) {
            default:
                if (typeof object.updateStrategy === "number") {
                    message.updateStrategy = object.updateStrategy;
                    break;
                }
                break;
            case "ALWAYS_UPDATE":
            case 0:
                message.updateStrategy = 0;
                break;
            case "ONLY_FETCH_ONCE":
            case 1:
                message.updateStrategy = 1;
                break;
            }
            if (object.lastModifiedAt != null)
                if ($util.Long)
                    (message.lastModifiedAt = $util.Long.fromValue(object.lastModifiedAt)).unsigned = false;
                else if (typeof object.lastModifiedAt === "string")
                    message.lastModifiedAt = parseInt(object.lastModifiedAt, 10);
                else if (typeof object.lastModifiedAt === "number")
                    message.lastModifiedAt = object.lastModifiedAt;
                else if (typeof object.lastModifiedAt === "object")
                    message.lastModifiedAt = new $util.LongBits(object.lastModifiedAt.low >>> 0, object.lastModifiedAt.high >>> 0).toNumber();
            if (object.favoriteModifiedAt != null)
                if ($util.Long)
                    (message.favoriteModifiedAt = $util.Long.fromValue(object.favoriteModifiedAt)).unsigned = false;
                else if (typeof object.favoriteModifiedAt === "string")
                    message.favoriteModifiedAt = parseInt(object.favoriteModifiedAt, 10);
                else if (typeof object.favoriteModifiedAt === "number")
                    message.favoriteModifiedAt = object.favoriteModifiedAt;
                else if (typeof object.favoriteModifiedAt === "object")
                    message.favoriteModifiedAt = new $util.LongBits(object.favoriteModifiedAt.low >>> 0, object.favoriteModifiedAt.high >>> 0).toNumber();
            if (object.excludedScanlators) {
                if (!Array.isArray(object.excludedScanlators))
                    throw TypeError(".MihonObjectModel.BackupManga.excludedScanlators: array expected");
                message.excludedScanlators = [];
                for (var i = 0; i < object.excludedScanlators.length; ++i)
                    message.excludedScanlators[i] = String(object.excludedScanlators[i]);
            }
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = false;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BackupManga message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.BackupManga
         * @static
         * @param {MihonObjectModel.BackupManga} message BackupManga
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackupManga.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.genre = [];
                object.chapters = [];
                object.categories = [];
                object.tracking = [];
                object.history = [];
                object.excludedScanlators = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.source = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.source = options.longs === String ? "0" : 0;
                object.url = "";
                object.title = "";
                object.artist = "";
                object.author = "";
                object.description = "";
                object.status = 0;
                object.thumbnailUrl = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dateAdded = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dateAdded = options.longs === String ? "0" : 0;
                object.viewer = 0;
                object.favorite = false;
                object.chapterFlags = 0;
                object.viewerFlags = 0;
                object.updateStrategy = options.enums === String ? "ALWAYS_UPDATE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastModifiedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastModifiedAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.favoriteModifiedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.favoriteModifiedAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
            }
            if (message.source != null && message.hasOwnProperty("source"))
                if (typeof message.source === "number")
                    object.source = options.longs === String ? String(message.source) : message.source;
                else
                    object.source = options.longs === String ? $util.Long.prototype.toString.call(message.source) : options.longs === Number ? new $util.LongBits(message.source.low >>> 0, message.source.high >>> 0).toNumber() : message.source;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.artist != null && message.hasOwnProperty("artist"))
                object.artist = message.artist;
            if (message.author != null && message.hasOwnProperty("author"))
                object.author = message.author;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.genre && message.genre.length) {
                object.genre = [];
                for (var j = 0; j < message.genre.length; ++j)
                    object.genre[j] = message.genre[j];
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.thumbnailUrl != null && message.hasOwnProperty("thumbnailUrl"))
                object.thumbnailUrl = message.thumbnailUrl;
            if (message.dateAdded != null && message.hasOwnProperty("dateAdded"))
                if (typeof message.dateAdded === "number")
                    object.dateAdded = options.longs === String ? String(message.dateAdded) : message.dateAdded;
                else
                    object.dateAdded = options.longs === String ? $util.Long.prototype.toString.call(message.dateAdded) : options.longs === Number ? new $util.LongBits(message.dateAdded.low >>> 0, message.dateAdded.high >>> 0).toNumber() : message.dateAdded;
            if (message.viewer != null && message.hasOwnProperty("viewer"))
                object.viewer = message.viewer;
            if (message.chapters && message.chapters.length) {
                object.chapters = [];
                for (var j = 0; j < message.chapters.length; ++j)
                    object.chapters[j] = $root.MihonObjectModel.BackupChapter.toObject(message.chapters[j], options);
            }
            if (message.categories && message.categories.length) {
                object.categories = [];
                for (var j = 0; j < message.categories.length; ++j)
                    if (typeof message.categories[j] === "number")
                        object.categories[j] = options.longs === String ? String(message.categories[j]) : message.categories[j];
                    else
                        object.categories[j] = options.longs === String ? $util.Long.prototype.toString.call(message.categories[j]) : options.longs === Number ? new $util.LongBits(message.categories[j].low >>> 0, message.categories[j].high >>> 0).toNumber() : message.categories[j];
            }
            if (message.tracking && message.tracking.length) {
                object.tracking = [];
                for (var j = 0; j < message.tracking.length; ++j)
                    object.tracking[j] = $root.MihonObjectModel.BackupTracking.toObject(message.tracking[j], options);
            }
            if (message.favorite != null && message.hasOwnProperty("favorite"))
                object.favorite = message.favorite;
            if (message.chapterFlags != null && message.hasOwnProperty("chapterFlags"))
                object.chapterFlags = message.chapterFlags;
            if (message.viewerFlags != null && message.hasOwnProperty("viewerFlags"))
                object.viewerFlags = message.viewerFlags;
            if (message.history && message.history.length) {
                object.history = [];
                for (var j = 0; j < message.history.length; ++j)
                    object.history[j] = $root.MihonObjectModel.BackupHistory.toObject(message.history[j], options);
            }
            if (message.updateStrategy != null && message.hasOwnProperty("updateStrategy"))
                object.updateStrategy = options.enums === String ? $root.MihonObjectModel.UpdateStrategy[message.updateStrategy] === undefined ? message.updateStrategy : $root.MihonObjectModel.UpdateStrategy[message.updateStrategy] : message.updateStrategy;
            if (message.lastModifiedAt != null && message.hasOwnProperty("lastModifiedAt"))
                if (typeof message.lastModifiedAt === "number")
                    object.lastModifiedAt = options.longs === String ? String(message.lastModifiedAt) : message.lastModifiedAt;
                else
                    object.lastModifiedAt = options.longs === String ? $util.Long.prototype.toString.call(message.lastModifiedAt) : options.longs === Number ? new $util.LongBits(message.lastModifiedAt.low >>> 0, message.lastModifiedAt.high >>> 0).toNumber() : message.lastModifiedAt;
            if (message.favoriteModifiedAt != null && message.hasOwnProperty("favoriteModifiedAt"))
                if (typeof message.favoriteModifiedAt === "number")
                    object.favoriteModifiedAt = options.longs === String ? String(message.favoriteModifiedAt) : message.favoriteModifiedAt;
                else
                    object.favoriteModifiedAt = options.longs === String ? $util.Long.prototype.toString.call(message.favoriteModifiedAt) : options.longs === Number ? new $util.LongBits(message.favoriteModifiedAt.low >>> 0, message.favoriteModifiedAt.high >>> 0).toNumber() : message.favoriteModifiedAt;
            if (message.excludedScanlators && message.excludedScanlators.length) {
                object.excludedScanlators = [];
                for (var j = 0; j < message.excludedScanlators.length; ++j)
                    object.excludedScanlators[j] = message.excludedScanlators[j];
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
            return object;
        };

        /**
         * Converts this BackupManga to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.BackupManga
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackupManga.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BackupManga
         * @function getTypeUrl
         * @memberof MihonObjectModel.BackupManga
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BackupManga.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.BackupManga";
        };

        return BackupManga;
    })();

    MihonObjectModel.BackupCategory = (function() {

        /**
         * Properties of a BackupCategory.
         * @memberof MihonObjectModel
         * @interface IBackupCategory
         * @property {string} name BackupCategory name
         * @property {number|Long|null} [order] BackupCategory order
         * @property {number|Long|null} [flags] BackupCategory flags
         */

        /**
         * Constructs a new BackupCategory.
         * @memberof MihonObjectModel
         * @classdesc Represents a BackupCategory.
         * @implements IBackupCategory
         * @constructor
         * @param {MihonObjectModel.IBackupCategory=} [properties] Properties to set
         */
        function BackupCategory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackupCategory name.
         * @member {string} name
         * @memberof MihonObjectModel.BackupCategory
         * @instance
         */
        BackupCategory.prototype.name = "";

        /**
         * BackupCategory order.
         * @member {number|Long} order
         * @memberof MihonObjectModel.BackupCategory
         * @instance
         */
        BackupCategory.prototype.order = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupCategory flags.
         * @member {number|Long} flags
         * @memberof MihonObjectModel.BackupCategory
         * @instance
         */
        BackupCategory.prototype.flags = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BackupCategory instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.BackupCategory
         * @static
         * @param {MihonObjectModel.IBackupCategory=} [properties] Properties to set
         * @returns {MihonObjectModel.BackupCategory} BackupCategory instance
         */
        BackupCategory.create = function create(properties) {
            return new BackupCategory(properties);
        };

        /**
         * Encodes the specified BackupCategory message. Does not implicitly {@link MihonObjectModel.BackupCategory.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.BackupCategory
         * @static
         * @param {MihonObjectModel.IBackupCategory} message BackupCategory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupCategory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.order != null && Object.hasOwnProperty.call(message, "order"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.order);
            if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                writer.uint32(/* id 100, wireType 0 =*/800).int64(message.flags);
            return writer;
        };

        /**
         * Encodes the specified BackupCategory message, length delimited. Does not implicitly {@link MihonObjectModel.BackupCategory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.BackupCategory
         * @static
         * @param {MihonObjectModel.IBackupCategory} message BackupCategory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupCategory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackupCategory message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.BackupCategory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.BackupCategory} BackupCategory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupCategory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.BackupCategory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.order = reader.int64();
                        break;
                    }
                case 100: {
                        message.flags = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a BackupCategory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.BackupCategory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.BackupCategory} BackupCategory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupCategory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackupCategory message.
         * @function verify
         * @memberof MihonObjectModel.BackupCategory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackupCategory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.order != null && message.hasOwnProperty("order"))
                if (!$util.isInteger(message.order) && !(message.order && $util.isInteger(message.order.low) && $util.isInteger(message.order.high)))
                    return "order: integer|Long expected";
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags) && !(message.flags && $util.isInteger(message.flags.low) && $util.isInteger(message.flags.high)))
                    return "flags: integer|Long expected";
            return null;
        };

        /**
         * Creates a BackupCategory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.BackupCategory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.BackupCategory} BackupCategory
         */
        BackupCategory.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.BackupCategory)
                return object;
            var message = new $root.MihonObjectModel.BackupCategory();
            if (object.name != null)
                message.name = String(object.name);
            if (object.order != null)
                if ($util.Long)
                    (message.order = $util.Long.fromValue(object.order)).unsigned = false;
                else if (typeof object.order === "string")
                    message.order = parseInt(object.order, 10);
                else if (typeof object.order === "number")
                    message.order = object.order;
                else if (typeof object.order === "object")
                    message.order = new $util.LongBits(object.order.low >>> 0, object.order.high >>> 0).toNumber();
            if (object.flags != null)
                if ($util.Long)
                    (message.flags = $util.Long.fromValue(object.flags)).unsigned = false;
                else if (typeof object.flags === "string")
                    message.flags = parseInt(object.flags, 10);
                else if (typeof object.flags === "number")
                    message.flags = object.flags;
                else if (typeof object.flags === "object")
                    message.flags = new $util.LongBits(object.flags.low >>> 0, object.flags.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BackupCategory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.BackupCategory
         * @static
         * @param {MihonObjectModel.BackupCategory} message BackupCategory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackupCategory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.order = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.order = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.flags = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.flags = options.longs === String ? "0" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.order != null && message.hasOwnProperty("order"))
                if (typeof message.order === "number")
                    object.order = options.longs === String ? String(message.order) : message.order;
                else
                    object.order = options.longs === String ? $util.Long.prototype.toString.call(message.order) : options.longs === Number ? new $util.LongBits(message.order.low >>> 0, message.order.high >>> 0).toNumber() : message.order;
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (typeof message.flags === "number")
                    object.flags = options.longs === String ? String(message.flags) : message.flags;
                else
                    object.flags = options.longs === String ? $util.Long.prototype.toString.call(message.flags) : options.longs === Number ? new $util.LongBits(message.flags.low >>> 0, message.flags.high >>> 0).toNumber() : message.flags;
            return object;
        };

        /**
         * Converts this BackupCategory to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.BackupCategory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackupCategory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BackupCategory
         * @function getTypeUrl
         * @memberof MihonObjectModel.BackupCategory
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BackupCategory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.BackupCategory";
        };

        return BackupCategory;
    })();

    MihonObjectModel.BackupSource = (function() {

        /**
         * Properties of a BackupSource.
         * @memberof MihonObjectModel
         * @interface IBackupSource
         * @property {string|null} [name] BackupSource name
         * @property {number|Long} sourceId BackupSource sourceId
         */

        /**
         * Constructs a new BackupSource.
         * @memberof MihonObjectModel
         * @classdesc Represents a BackupSource.
         * @implements IBackupSource
         * @constructor
         * @param {MihonObjectModel.IBackupSource=} [properties] Properties to set
         */
        function BackupSource(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackupSource name.
         * @member {string} name
         * @memberof MihonObjectModel.BackupSource
         * @instance
         */
        BackupSource.prototype.name = "";

        /**
         * BackupSource sourceId.
         * @member {number|Long} sourceId
         * @memberof MihonObjectModel.BackupSource
         * @instance
         */
        BackupSource.prototype.sourceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BackupSource instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.BackupSource
         * @static
         * @param {MihonObjectModel.IBackupSource=} [properties] Properties to set
         * @returns {MihonObjectModel.BackupSource} BackupSource instance
         */
        BackupSource.create = function create(properties) {
            return new BackupSource(properties);
        };

        /**
         * Encodes the specified BackupSource message. Does not implicitly {@link MihonObjectModel.BackupSource.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.BackupSource
         * @static
         * @param {MihonObjectModel.IBackupSource} message BackupSource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupSource.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sourceId);
            return writer;
        };

        /**
         * Encodes the specified BackupSource message, length delimited. Does not implicitly {@link MihonObjectModel.BackupSource.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.BackupSource
         * @static
         * @param {MihonObjectModel.IBackupSource} message BackupSource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupSource.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackupSource message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.BackupSource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.BackupSource} BackupSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupSource.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.BackupSource();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.sourceId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sourceId"))
                throw $util.ProtocolError("missing required 'sourceId'", { instance: message });
            return message;
        };

        /**
         * Decodes a BackupSource message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.BackupSource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.BackupSource} BackupSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupSource.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackupSource message.
         * @function verify
         * @memberof MihonObjectModel.BackupSource
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackupSource.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (!$util.isInteger(message.sourceId) && !(message.sourceId && $util.isInteger(message.sourceId.low) && $util.isInteger(message.sourceId.high)))
                return "sourceId: integer|Long expected";
            return null;
        };

        /**
         * Creates a BackupSource message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.BackupSource
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.BackupSource} BackupSource
         */
        BackupSource.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.BackupSource)
                return object;
            var message = new $root.MihonObjectModel.BackupSource();
            if (object.name != null)
                message.name = String(object.name);
            if (object.sourceId != null)
                if ($util.Long)
                    (message.sourceId = $util.Long.fromValue(object.sourceId)).unsigned = false;
                else if (typeof object.sourceId === "string")
                    message.sourceId = parseInt(object.sourceId, 10);
                else if (typeof object.sourceId === "number")
                    message.sourceId = object.sourceId;
                else if (typeof object.sourceId === "object")
                    message.sourceId = new $util.LongBits(object.sourceId.low >>> 0, object.sourceId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BackupSource message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.BackupSource
         * @static
         * @param {MihonObjectModel.BackupSource} message BackupSource
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackupSource.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sourceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sourceId = options.longs === String ? "0" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                if (typeof message.sourceId === "number")
                    object.sourceId = options.longs === String ? String(message.sourceId) : message.sourceId;
                else
                    object.sourceId = options.longs === String ? $util.Long.prototype.toString.call(message.sourceId) : options.longs === Number ? new $util.LongBits(message.sourceId.low >>> 0, message.sourceId.high >>> 0).toNumber() : message.sourceId;
            return object;
        };

        /**
         * Converts this BackupSource to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.BackupSource
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackupSource.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BackupSource
         * @function getTypeUrl
         * @memberof MihonObjectModel.BackupSource
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BackupSource.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.BackupSource";
        };

        return BackupSource;
    })();

    MihonObjectModel.BackupChapter = (function() {

        /**
         * Properties of a BackupChapter.
         * @memberof MihonObjectModel
         * @interface IBackupChapter
         * @property {string} url BackupChapter url
         * @property {string} name BackupChapter name
         * @property {string|null} [scanlator] BackupChapter scanlator
         * @property {boolean|null} [read] BackupChapter read
         * @property {boolean|null} [bookmark] BackupChapter bookmark
         * @property {number|Long|null} [lastPageRead] BackupChapter lastPageRead
         * @property {number|Long|null} [dateFetch] BackupChapter dateFetch
         * @property {number|Long|null} [dateUpload] BackupChapter dateUpload
         * @property {number|null} [chapterNumber] BackupChapter chapterNumber
         * @property {number|Long|null} [sourceOrder] BackupChapter sourceOrder
         * @property {number|Long|null} [lastModifiedAt] BackupChapter lastModifiedAt
         * @property {number|Long|null} [version] BackupChapter version
         */

        /**
         * Constructs a new BackupChapter.
         * @memberof MihonObjectModel
         * @classdesc Represents a BackupChapter.
         * @implements IBackupChapter
         * @constructor
         * @param {MihonObjectModel.IBackupChapter=} [properties] Properties to set
         */
        function BackupChapter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackupChapter url.
         * @member {string} url
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.url = "";

        /**
         * BackupChapter name.
         * @member {string} name
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.name = "";

        /**
         * BackupChapter scanlator.
         * @member {string} scanlator
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.scanlator = "";

        /**
         * BackupChapter read.
         * @member {boolean} read
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.read = false;

        /**
         * BackupChapter bookmark.
         * @member {boolean} bookmark
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.bookmark = false;

        /**
         * BackupChapter lastPageRead.
         * @member {number|Long} lastPageRead
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.lastPageRead = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupChapter dateFetch.
         * @member {number|Long} dateFetch
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.dateFetch = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupChapter dateUpload.
         * @member {number|Long} dateUpload
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.dateUpload = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupChapter chapterNumber.
         * @member {number} chapterNumber
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.chapterNumber = 0;

        /**
         * BackupChapter sourceOrder.
         * @member {number|Long} sourceOrder
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.sourceOrder = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupChapter lastModifiedAt.
         * @member {number|Long} lastModifiedAt
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.lastModifiedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupChapter version.
         * @member {number|Long} version
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         */
        BackupChapter.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BackupChapter instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.BackupChapter
         * @static
         * @param {MihonObjectModel.IBackupChapter=} [properties] Properties to set
         * @returns {MihonObjectModel.BackupChapter} BackupChapter instance
         */
        BackupChapter.create = function create(properties) {
            return new BackupChapter(properties);
        };

        /**
         * Encodes the specified BackupChapter message. Does not implicitly {@link MihonObjectModel.BackupChapter.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.BackupChapter
         * @static
         * @param {MihonObjectModel.IBackupChapter} message BackupChapter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupChapter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.scanlator != null && Object.hasOwnProperty.call(message, "scanlator"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.scanlator);
            if (message.read != null && Object.hasOwnProperty.call(message, "read"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.read);
            if (message.bookmark != null && Object.hasOwnProperty.call(message, "bookmark"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.bookmark);
            if (message.lastPageRead != null && Object.hasOwnProperty.call(message, "lastPageRead"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.lastPageRead);
            if (message.dateFetch != null && Object.hasOwnProperty.call(message, "dateFetch"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.dateFetch);
            if (message.dateUpload != null && Object.hasOwnProperty.call(message, "dateUpload"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.dateUpload);
            if (message.chapterNumber != null && Object.hasOwnProperty.call(message, "chapterNumber"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.chapterNumber);
            if (message.sourceOrder != null && Object.hasOwnProperty.call(message, "sourceOrder"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.sourceOrder);
            if (message.lastModifiedAt != null && Object.hasOwnProperty.call(message, "lastModifiedAt"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.lastModifiedAt);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.version);
            return writer;
        };

        /**
         * Encodes the specified BackupChapter message, length delimited. Does not implicitly {@link MihonObjectModel.BackupChapter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.BackupChapter
         * @static
         * @param {MihonObjectModel.IBackupChapter} message BackupChapter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupChapter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackupChapter message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.BackupChapter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.BackupChapter} BackupChapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupChapter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.BackupChapter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.scanlator = reader.string();
                        break;
                    }
                case 4: {
                        message.read = reader.bool();
                        break;
                    }
                case 5: {
                        message.bookmark = reader.bool();
                        break;
                    }
                case 6: {
                        message.lastPageRead = reader.int64();
                        break;
                    }
                case 7: {
                        message.dateFetch = reader.int64();
                        break;
                    }
                case 8: {
                        message.dateUpload = reader.int64();
                        break;
                    }
                case 9: {
                        message.chapterNumber = reader.float();
                        break;
                    }
                case 10: {
                        message.sourceOrder = reader.int64();
                        break;
                    }
                case 11: {
                        message.lastModifiedAt = reader.int64();
                        break;
                    }
                case 12: {
                        message.version = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("url"))
                throw $util.ProtocolError("missing required 'url'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a BackupChapter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.BackupChapter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.BackupChapter} BackupChapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupChapter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackupChapter message.
         * @function verify
         * @memberof MihonObjectModel.BackupChapter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackupChapter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.url))
                return "url: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.scanlator != null && message.hasOwnProperty("scanlator"))
                if (!$util.isString(message.scanlator))
                    return "scanlator: string expected";
            if (message.read != null && message.hasOwnProperty("read"))
                if (typeof message.read !== "boolean")
                    return "read: boolean expected";
            if (message.bookmark != null && message.hasOwnProperty("bookmark"))
                if (typeof message.bookmark !== "boolean")
                    return "bookmark: boolean expected";
            if (message.lastPageRead != null && message.hasOwnProperty("lastPageRead"))
                if (!$util.isInteger(message.lastPageRead) && !(message.lastPageRead && $util.isInteger(message.lastPageRead.low) && $util.isInteger(message.lastPageRead.high)))
                    return "lastPageRead: integer|Long expected";
            if (message.dateFetch != null && message.hasOwnProperty("dateFetch"))
                if (!$util.isInteger(message.dateFetch) && !(message.dateFetch && $util.isInteger(message.dateFetch.low) && $util.isInteger(message.dateFetch.high)))
                    return "dateFetch: integer|Long expected";
            if (message.dateUpload != null && message.hasOwnProperty("dateUpload"))
                if (!$util.isInteger(message.dateUpload) && !(message.dateUpload && $util.isInteger(message.dateUpload.low) && $util.isInteger(message.dateUpload.high)))
                    return "dateUpload: integer|Long expected";
            if (message.chapterNumber != null && message.hasOwnProperty("chapterNumber"))
                if (typeof message.chapterNumber !== "number")
                    return "chapterNumber: number expected";
            if (message.sourceOrder != null && message.hasOwnProperty("sourceOrder"))
                if (!$util.isInteger(message.sourceOrder) && !(message.sourceOrder && $util.isInteger(message.sourceOrder.low) && $util.isInteger(message.sourceOrder.high)))
                    return "sourceOrder: integer|Long expected";
            if (message.lastModifiedAt != null && message.hasOwnProperty("lastModifiedAt"))
                if (!$util.isInteger(message.lastModifiedAt) && !(message.lastModifiedAt && $util.isInteger(message.lastModifiedAt.low) && $util.isInteger(message.lastModifiedAt.high)))
                    return "lastModifiedAt: integer|Long expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            return null;
        };

        /**
         * Creates a BackupChapter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.BackupChapter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.BackupChapter} BackupChapter
         */
        BackupChapter.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.BackupChapter)
                return object;
            var message = new $root.MihonObjectModel.BackupChapter();
            if (object.url != null)
                message.url = String(object.url);
            if (object.name != null)
                message.name = String(object.name);
            if (object.scanlator != null)
                message.scanlator = String(object.scanlator);
            if (object.read != null)
                message.read = Boolean(object.read);
            if (object.bookmark != null)
                message.bookmark = Boolean(object.bookmark);
            if (object.lastPageRead != null)
                if ($util.Long)
                    (message.lastPageRead = $util.Long.fromValue(object.lastPageRead)).unsigned = false;
                else if (typeof object.lastPageRead === "string")
                    message.lastPageRead = parseInt(object.lastPageRead, 10);
                else if (typeof object.lastPageRead === "number")
                    message.lastPageRead = object.lastPageRead;
                else if (typeof object.lastPageRead === "object")
                    message.lastPageRead = new $util.LongBits(object.lastPageRead.low >>> 0, object.lastPageRead.high >>> 0).toNumber();
            if (object.dateFetch != null)
                if ($util.Long)
                    (message.dateFetch = $util.Long.fromValue(object.dateFetch)).unsigned = false;
                else if (typeof object.dateFetch === "string")
                    message.dateFetch = parseInt(object.dateFetch, 10);
                else if (typeof object.dateFetch === "number")
                    message.dateFetch = object.dateFetch;
                else if (typeof object.dateFetch === "object")
                    message.dateFetch = new $util.LongBits(object.dateFetch.low >>> 0, object.dateFetch.high >>> 0).toNumber();
            if (object.dateUpload != null)
                if ($util.Long)
                    (message.dateUpload = $util.Long.fromValue(object.dateUpload)).unsigned = false;
                else if (typeof object.dateUpload === "string")
                    message.dateUpload = parseInt(object.dateUpload, 10);
                else if (typeof object.dateUpload === "number")
                    message.dateUpload = object.dateUpload;
                else if (typeof object.dateUpload === "object")
                    message.dateUpload = new $util.LongBits(object.dateUpload.low >>> 0, object.dateUpload.high >>> 0).toNumber();
            if (object.chapterNumber != null)
                message.chapterNumber = Number(object.chapterNumber);
            if (object.sourceOrder != null)
                if ($util.Long)
                    (message.sourceOrder = $util.Long.fromValue(object.sourceOrder)).unsigned = false;
                else if (typeof object.sourceOrder === "string")
                    message.sourceOrder = parseInt(object.sourceOrder, 10);
                else if (typeof object.sourceOrder === "number")
                    message.sourceOrder = object.sourceOrder;
                else if (typeof object.sourceOrder === "object")
                    message.sourceOrder = new $util.LongBits(object.sourceOrder.low >>> 0, object.sourceOrder.high >>> 0).toNumber();
            if (object.lastModifiedAt != null)
                if ($util.Long)
                    (message.lastModifiedAt = $util.Long.fromValue(object.lastModifiedAt)).unsigned = false;
                else if (typeof object.lastModifiedAt === "string")
                    message.lastModifiedAt = parseInt(object.lastModifiedAt, 10);
                else if (typeof object.lastModifiedAt === "number")
                    message.lastModifiedAt = object.lastModifiedAt;
                else if (typeof object.lastModifiedAt === "object")
                    message.lastModifiedAt = new $util.LongBits(object.lastModifiedAt.low >>> 0, object.lastModifiedAt.high >>> 0).toNumber();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = false;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BackupChapter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.BackupChapter
         * @static
         * @param {MihonObjectModel.BackupChapter} message BackupChapter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackupChapter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.url = "";
                object.name = "";
                object.scanlator = "";
                object.read = false;
                object.bookmark = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastPageRead = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastPageRead = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dateFetch = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dateFetch = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dateUpload = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dateUpload = options.longs === String ? "0" : 0;
                object.chapterNumber = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sourceOrder = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sourceOrder = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastModifiedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastModifiedAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.scanlator != null && message.hasOwnProperty("scanlator"))
                object.scanlator = message.scanlator;
            if (message.read != null && message.hasOwnProperty("read"))
                object.read = message.read;
            if (message.bookmark != null && message.hasOwnProperty("bookmark"))
                object.bookmark = message.bookmark;
            if (message.lastPageRead != null && message.hasOwnProperty("lastPageRead"))
                if (typeof message.lastPageRead === "number")
                    object.lastPageRead = options.longs === String ? String(message.lastPageRead) : message.lastPageRead;
                else
                    object.lastPageRead = options.longs === String ? $util.Long.prototype.toString.call(message.lastPageRead) : options.longs === Number ? new $util.LongBits(message.lastPageRead.low >>> 0, message.lastPageRead.high >>> 0).toNumber() : message.lastPageRead;
            if (message.dateFetch != null && message.hasOwnProperty("dateFetch"))
                if (typeof message.dateFetch === "number")
                    object.dateFetch = options.longs === String ? String(message.dateFetch) : message.dateFetch;
                else
                    object.dateFetch = options.longs === String ? $util.Long.prototype.toString.call(message.dateFetch) : options.longs === Number ? new $util.LongBits(message.dateFetch.low >>> 0, message.dateFetch.high >>> 0).toNumber() : message.dateFetch;
            if (message.dateUpload != null && message.hasOwnProperty("dateUpload"))
                if (typeof message.dateUpload === "number")
                    object.dateUpload = options.longs === String ? String(message.dateUpload) : message.dateUpload;
                else
                    object.dateUpload = options.longs === String ? $util.Long.prototype.toString.call(message.dateUpload) : options.longs === Number ? new $util.LongBits(message.dateUpload.low >>> 0, message.dateUpload.high >>> 0).toNumber() : message.dateUpload;
            if (message.chapterNumber != null && message.hasOwnProperty("chapterNumber"))
                object.chapterNumber = options.json && !isFinite(message.chapterNumber) ? String(message.chapterNumber) : message.chapterNumber;
            if (message.sourceOrder != null && message.hasOwnProperty("sourceOrder"))
                if (typeof message.sourceOrder === "number")
                    object.sourceOrder = options.longs === String ? String(message.sourceOrder) : message.sourceOrder;
                else
                    object.sourceOrder = options.longs === String ? $util.Long.prototype.toString.call(message.sourceOrder) : options.longs === Number ? new $util.LongBits(message.sourceOrder.low >>> 0, message.sourceOrder.high >>> 0).toNumber() : message.sourceOrder;
            if (message.lastModifiedAt != null && message.hasOwnProperty("lastModifiedAt"))
                if (typeof message.lastModifiedAt === "number")
                    object.lastModifiedAt = options.longs === String ? String(message.lastModifiedAt) : message.lastModifiedAt;
                else
                    object.lastModifiedAt = options.longs === String ? $util.Long.prototype.toString.call(message.lastModifiedAt) : options.longs === Number ? new $util.LongBits(message.lastModifiedAt.low >>> 0, message.lastModifiedAt.high >>> 0).toNumber() : message.lastModifiedAt;
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
            return object;
        };

        /**
         * Converts this BackupChapter to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.BackupChapter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackupChapter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BackupChapter
         * @function getTypeUrl
         * @memberof MihonObjectModel.BackupChapter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BackupChapter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.BackupChapter";
        };

        return BackupChapter;
    })();

    MihonObjectModel.BackupTracking = (function() {

        /**
         * Properties of a BackupTracking.
         * @memberof MihonObjectModel
         * @interface IBackupTracking
         * @property {number} syncId BackupTracking syncId
         * @property {number|Long} libraryId BackupTracking libraryId
         * @property {number|null} [mediaIdInt] BackupTracking mediaIdInt
         * @property {string|null} [trackingUrl] BackupTracking trackingUrl
         * @property {string|null} [title] BackupTracking title
         * @property {number|null} [lastChapterRead] BackupTracking lastChapterRead
         * @property {number|null} [totalChapters] BackupTracking totalChapters
         * @property {number|null} [score] BackupTracking score
         * @property {number|null} [status] BackupTracking status
         * @property {number|Long|null} [startedReadingDate] BackupTracking startedReadingDate
         * @property {number|Long|null} [finishedReadingDate] BackupTracking finishedReadingDate
         * @property {number|Long|null} [mediaId] BackupTracking mediaId
         */

        /**
         * Constructs a new BackupTracking.
         * @memberof MihonObjectModel
         * @classdesc Represents a BackupTracking.
         * @implements IBackupTracking
         * @constructor
         * @param {MihonObjectModel.IBackupTracking=} [properties] Properties to set
         */
        function BackupTracking(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackupTracking syncId.
         * @member {number} syncId
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.syncId = 0;

        /**
         * BackupTracking libraryId.
         * @member {number|Long} libraryId
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.libraryId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupTracking mediaIdInt.
         * @member {number} mediaIdInt
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.mediaIdInt = 0;

        /**
         * BackupTracking trackingUrl.
         * @member {string} trackingUrl
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.trackingUrl = "";

        /**
         * BackupTracking title.
         * @member {string} title
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.title = "";

        /**
         * BackupTracking lastChapterRead.
         * @member {number} lastChapterRead
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.lastChapterRead = 0;

        /**
         * BackupTracking totalChapters.
         * @member {number} totalChapters
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.totalChapters = 0;

        /**
         * BackupTracking score.
         * @member {number} score
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.score = 0;

        /**
         * BackupTracking status.
         * @member {number} status
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.status = 0;

        /**
         * BackupTracking startedReadingDate.
         * @member {number|Long} startedReadingDate
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.startedReadingDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupTracking finishedReadingDate.
         * @member {number|Long} finishedReadingDate
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.finishedReadingDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupTracking mediaId.
         * @member {number|Long} mediaId
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         */
        BackupTracking.prototype.mediaId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BackupTracking instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.BackupTracking
         * @static
         * @param {MihonObjectModel.IBackupTracking=} [properties] Properties to set
         * @returns {MihonObjectModel.BackupTracking} BackupTracking instance
         */
        BackupTracking.create = function create(properties) {
            return new BackupTracking(properties);
        };

        /**
         * Encodes the specified BackupTracking message. Does not implicitly {@link MihonObjectModel.BackupTracking.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.BackupTracking
         * @static
         * @param {MihonObjectModel.IBackupTracking} message BackupTracking message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupTracking.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.syncId);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.libraryId);
            if (message.mediaIdInt != null && Object.hasOwnProperty.call(message, "mediaIdInt"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.mediaIdInt);
            if (message.trackingUrl != null && Object.hasOwnProperty.call(message, "trackingUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.trackingUrl);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
            if (message.lastChapterRead != null && Object.hasOwnProperty.call(message, "lastChapterRead"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.lastChapterRead);
            if (message.totalChapters != null && Object.hasOwnProperty.call(message, "totalChapters"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.totalChapters);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.score);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.status);
            if (message.startedReadingDate != null && Object.hasOwnProperty.call(message, "startedReadingDate"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.startedReadingDate);
            if (message.finishedReadingDate != null && Object.hasOwnProperty.call(message, "finishedReadingDate"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.finishedReadingDate);
            if (message.mediaId != null && Object.hasOwnProperty.call(message, "mediaId"))
                writer.uint32(/* id 100, wireType 0 =*/800).int64(message.mediaId);
            return writer;
        };

        /**
         * Encodes the specified BackupTracking message, length delimited. Does not implicitly {@link MihonObjectModel.BackupTracking.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.BackupTracking
         * @static
         * @param {MihonObjectModel.IBackupTracking} message BackupTracking message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupTracking.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackupTracking message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.BackupTracking
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.BackupTracking} BackupTracking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupTracking.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.BackupTracking();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.syncId = reader.int32();
                        break;
                    }
                case 2: {
                        message.libraryId = reader.int64();
                        break;
                    }
                case 3: {
                        message.mediaIdInt = reader.int32();
                        break;
                    }
                case 4: {
                        message.trackingUrl = reader.string();
                        break;
                    }
                case 5: {
                        message.title = reader.string();
                        break;
                    }
                case 6: {
                        message.lastChapterRead = reader.float();
                        break;
                    }
                case 7: {
                        message.totalChapters = reader.int32();
                        break;
                    }
                case 8: {
                        message.score = reader.float();
                        break;
                    }
                case 9: {
                        message.status = reader.int32();
                        break;
                    }
                case 10: {
                        message.startedReadingDate = reader.int64();
                        break;
                    }
                case 11: {
                        message.finishedReadingDate = reader.int64();
                        break;
                    }
                case 100: {
                        message.mediaId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("syncId"))
                throw $util.ProtocolError("missing required 'syncId'", { instance: message });
            if (!message.hasOwnProperty("libraryId"))
                throw $util.ProtocolError("missing required 'libraryId'", { instance: message });
            return message;
        };

        /**
         * Decodes a BackupTracking message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.BackupTracking
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.BackupTracking} BackupTracking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupTracking.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackupTracking message.
         * @function verify
         * @memberof MihonObjectModel.BackupTracking
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackupTracking.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.syncId))
                return "syncId: integer expected";
            if (!$util.isInteger(message.libraryId) && !(message.libraryId && $util.isInteger(message.libraryId.low) && $util.isInteger(message.libraryId.high)))
                return "libraryId: integer|Long expected";
            if (message.mediaIdInt != null && message.hasOwnProperty("mediaIdInt"))
                if (!$util.isInteger(message.mediaIdInt))
                    return "mediaIdInt: integer expected";
            if (message.trackingUrl != null && message.hasOwnProperty("trackingUrl"))
                if (!$util.isString(message.trackingUrl))
                    return "trackingUrl: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.lastChapterRead != null && message.hasOwnProperty("lastChapterRead"))
                if (typeof message.lastChapterRead !== "number")
                    return "lastChapterRead: number expected";
            if (message.totalChapters != null && message.hasOwnProperty("totalChapters"))
                if (!$util.isInteger(message.totalChapters))
                    return "totalChapters: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (typeof message.score !== "number")
                    return "score: number expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.startedReadingDate != null && message.hasOwnProperty("startedReadingDate"))
                if (!$util.isInteger(message.startedReadingDate) && !(message.startedReadingDate && $util.isInteger(message.startedReadingDate.low) && $util.isInteger(message.startedReadingDate.high)))
                    return "startedReadingDate: integer|Long expected";
            if (message.finishedReadingDate != null && message.hasOwnProperty("finishedReadingDate"))
                if (!$util.isInteger(message.finishedReadingDate) && !(message.finishedReadingDate && $util.isInteger(message.finishedReadingDate.low) && $util.isInteger(message.finishedReadingDate.high)))
                    return "finishedReadingDate: integer|Long expected";
            if (message.mediaId != null && message.hasOwnProperty("mediaId"))
                if (!$util.isInteger(message.mediaId) && !(message.mediaId && $util.isInteger(message.mediaId.low) && $util.isInteger(message.mediaId.high)))
                    return "mediaId: integer|Long expected";
            return null;
        };

        /**
         * Creates a BackupTracking message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.BackupTracking
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.BackupTracking} BackupTracking
         */
        BackupTracking.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.BackupTracking)
                return object;
            var message = new $root.MihonObjectModel.BackupTracking();
            if (object.syncId != null)
                message.syncId = object.syncId | 0;
            if (object.libraryId != null)
                if ($util.Long)
                    (message.libraryId = $util.Long.fromValue(object.libraryId)).unsigned = false;
                else if (typeof object.libraryId === "string")
                    message.libraryId = parseInt(object.libraryId, 10);
                else if (typeof object.libraryId === "number")
                    message.libraryId = object.libraryId;
                else if (typeof object.libraryId === "object")
                    message.libraryId = new $util.LongBits(object.libraryId.low >>> 0, object.libraryId.high >>> 0).toNumber();
            if (object.mediaIdInt != null)
                message.mediaIdInt = object.mediaIdInt | 0;
            if (object.trackingUrl != null)
                message.trackingUrl = String(object.trackingUrl);
            if (object.title != null)
                message.title = String(object.title);
            if (object.lastChapterRead != null)
                message.lastChapterRead = Number(object.lastChapterRead);
            if (object.totalChapters != null)
                message.totalChapters = object.totalChapters | 0;
            if (object.score != null)
                message.score = Number(object.score);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.startedReadingDate != null)
                if ($util.Long)
                    (message.startedReadingDate = $util.Long.fromValue(object.startedReadingDate)).unsigned = false;
                else if (typeof object.startedReadingDate === "string")
                    message.startedReadingDate = parseInt(object.startedReadingDate, 10);
                else if (typeof object.startedReadingDate === "number")
                    message.startedReadingDate = object.startedReadingDate;
                else if (typeof object.startedReadingDate === "object")
                    message.startedReadingDate = new $util.LongBits(object.startedReadingDate.low >>> 0, object.startedReadingDate.high >>> 0).toNumber();
            if (object.finishedReadingDate != null)
                if ($util.Long)
                    (message.finishedReadingDate = $util.Long.fromValue(object.finishedReadingDate)).unsigned = false;
                else if (typeof object.finishedReadingDate === "string")
                    message.finishedReadingDate = parseInt(object.finishedReadingDate, 10);
                else if (typeof object.finishedReadingDate === "number")
                    message.finishedReadingDate = object.finishedReadingDate;
                else if (typeof object.finishedReadingDate === "object")
                    message.finishedReadingDate = new $util.LongBits(object.finishedReadingDate.low >>> 0, object.finishedReadingDate.high >>> 0).toNumber();
            if (object.mediaId != null)
                if ($util.Long)
                    (message.mediaId = $util.Long.fromValue(object.mediaId)).unsigned = false;
                else if (typeof object.mediaId === "string")
                    message.mediaId = parseInt(object.mediaId, 10);
                else if (typeof object.mediaId === "number")
                    message.mediaId = object.mediaId;
                else if (typeof object.mediaId === "object")
                    message.mediaId = new $util.LongBits(object.mediaId.low >>> 0, object.mediaId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BackupTracking message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.BackupTracking
         * @static
         * @param {MihonObjectModel.BackupTracking} message BackupTracking
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackupTracking.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.syncId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.libraryId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.libraryId = options.longs === String ? "0" : 0;
                object.mediaIdInt = 0;
                object.trackingUrl = "";
                object.title = "";
                object.lastChapterRead = 0;
                object.totalChapters = 0;
                object.score = 0;
                object.status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startedReadingDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startedReadingDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.finishedReadingDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.finishedReadingDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.mediaId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.mediaId = options.longs === String ? "0" : 0;
            }
            if (message.syncId != null && message.hasOwnProperty("syncId"))
                object.syncId = message.syncId;
            if (message.libraryId != null && message.hasOwnProperty("libraryId"))
                if (typeof message.libraryId === "number")
                    object.libraryId = options.longs === String ? String(message.libraryId) : message.libraryId;
                else
                    object.libraryId = options.longs === String ? $util.Long.prototype.toString.call(message.libraryId) : options.longs === Number ? new $util.LongBits(message.libraryId.low >>> 0, message.libraryId.high >>> 0).toNumber() : message.libraryId;
            if (message.mediaIdInt != null && message.hasOwnProperty("mediaIdInt"))
                object.mediaIdInt = message.mediaIdInt;
            if (message.trackingUrl != null && message.hasOwnProperty("trackingUrl"))
                object.trackingUrl = message.trackingUrl;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.lastChapterRead != null && message.hasOwnProperty("lastChapterRead"))
                object.lastChapterRead = options.json && !isFinite(message.lastChapterRead) ? String(message.lastChapterRead) : message.lastChapterRead;
            if (message.totalChapters != null && message.hasOwnProperty("totalChapters"))
                object.totalChapters = message.totalChapters;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = options.json && !isFinite(message.score) ? String(message.score) : message.score;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.startedReadingDate != null && message.hasOwnProperty("startedReadingDate"))
                if (typeof message.startedReadingDate === "number")
                    object.startedReadingDate = options.longs === String ? String(message.startedReadingDate) : message.startedReadingDate;
                else
                    object.startedReadingDate = options.longs === String ? $util.Long.prototype.toString.call(message.startedReadingDate) : options.longs === Number ? new $util.LongBits(message.startedReadingDate.low >>> 0, message.startedReadingDate.high >>> 0).toNumber() : message.startedReadingDate;
            if (message.finishedReadingDate != null && message.hasOwnProperty("finishedReadingDate"))
                if (typeof message.finishedReadingDate === "number")
                    object.finishedReadingDate = options.longs === String ? String(message.finishedReadingDate) : message.finishedReadingDate;
                else
                    object.finishedReadingDate = options.longs === String ? $util.Long.prototype.toString.call(message.finishedReadingDate) : options.longs === Number ? new $util.LongBits(message.finishedReadingDate.low >>> 0, message.finishedReadingDate.high >>> 0).toNumber() : message.finishedReadingDate;
            if (message.mediaId != null && message.hasOwnProperty("mediaId"))
                if (typeof message.mediaId === "number")
                    object.mediaId = options.longs === String ? String(message.mediaId) : message.mediaId;
                else
                    object.mediaId = options.longs === String ? $util.Long.prototype.toString.call(message.mediaId) : options.longs === Number ? new $util.LongBits(message.mediaId.low >>> 0, message.mediaId.high >>> 0).toNumber() : message.mediaId;
            return object;
        };

        /**
         * Converts this BackupTracking to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.BackupTracking
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackupTracking.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BackupTracking
         * @function getTypeUrl
         * @memberof MihonObjectModel.BackupTracking
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BackupTracking.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.BackupTracking";
        };

        return BackupTracking;
    })();

    MihonObjectModel.BackupHistory = (function() {

        /**
         * Properties of a BackupHistory.
         * @memberof MihonObjectModel
         * @interface IBackupHistory
         * @property {string} url BackupHistory url
         * @property {number|Long} lastRead BackupHistory lastRead
         * @property {number|Long|null} [readDuration] BackupHistory readDuration
         */

        /**
         * Constructs a new BackupHistory.
         * @memberof MihonObjectModel
         * @classdesc Represents a BackupHistory.
         * @implements IBackupHistory
         * @constructor
         * @param {MihonObjectModel.IBackupHistory=} [properties] Properties to set
         */
        function BackupHistory(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackupHistory url.
         * @member {string} url
         * @memberof MihonObjectModel.BackupHistory
         * @instance
         */
        BackupHistory.prototype.url = "";

        /**
         * BackupHistory lastRead.
         * @member {number|Long} lastRead
         * @memberof MihonObjectModel.BackupHistory
         * @instance
         */
        BackupHistory.prototype.lastRead = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BackupHistory readDuration.
         * @member {number|Long} readDuration
         * @memberof MihonObjectModel.BackupHistory
         * @instance
         */
        BackupHistory.prototype.readDuration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BackupHistory instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.BackupHistory
         * @static
         * @param {MihonObjectModel.IBackupHistory=} [properties] Properties to set
         * @returns {MihonObjectModel.BackupHistory} BackupHistory instance
         */
        BackupHistory.create = function create(properties) {
            return new BackupHistory(properties);
        };

        /**
         * Encodes the specified BackupHistory message. Does not implicitly {@link MihonObjectModel.BackupHistory.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.BackupHistory
         * @static
         * @param {MihonObjectModel.IBackupHistory} message BackupHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupHistory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.lastRead);
            if (message.readDuration != null && Object.hasOwnProperty.call(message, "readDuration"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.readDuration);
            return writer;
        };

        /**
         * Encodes the specified BackupHistory message, length delimited. Does not implicitly {@link MihonObjectModel.BackupHistory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.BackupHistory
         * @static
         * @param {MihonObjectModel.IBackupHistory} message BackupHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupHistory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BackupHistory message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.BackupHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.BackupHistory} BackupHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupHistory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.BackupHistory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
                        break;
                    }
                case 2: {
                        message.lastRead = reader.int64();
                        break;
                    }
                case 3: {
                        message.readDuration = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("url"))
                throw $util.ProtocolError("missing required 'url'", { instance: message });
            if (!message.hasOwnProperty("lastRead"))
                throw $util.ProtocolError("missing required 'lastRead'", { instance: message });
            return message;
        };

        /**
         * Decodes a BackupHistory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.BackupHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.BackupHistory} BackupHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupHistory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BackupHistory message.
         * @function verify
         * @memberof MihonObjectModel.BackupHistory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BackupHistory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.url))
                return "url: string expected";
            if (!$util.isInteger(message.lastRead) && !(message.lastRead && $util.isInteger(message.lastRead.low) && $util.isInteger(message.lastRead.high)))
                return "lastRead: integer|Long expected";
            if (message.readDuration != null && message.hasOwnProperty("readDuration"))
                if (!$util.isInteger(message.readDuration) && !(message.readDuration && $util.isInteger(message.readDuration.low) && $util.isInteger(message.readDuration.high)))
                    return "readDuration: integer|Long expected";
            return null;
        };

        /**
         * Creates a BackupHistory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.BackupHistory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.BackupHistory} BackupHistory
         */
        BackupHistory.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.BackupHistory)
                return object;
            var message = new $root.MihonObjectModel.BackupHistory();
            if (object.url != null)
                message.url = String(object.url);
            if (object.lastRead != null)
                if ($util.Long)
                    (message.lastRead = $util.Long.fromValue(object.lastRead)).unsigned = false;
                else if (typeof object.lastRead === "string")
                    message.lastRead = parseInt(object.lastRead, 10);
                else if (typeof object.lastRead === "number")
                    message.lastRead = object.lastRead;
                else if (typeof object.lastRead === "object")
                    message.lastRead = new $util.LongBits(object.lastRead.low >>> 0, object.lastRead.high >>> 0).toNumber();
            if (object.readDuration != null)
                if ($util.Long)
                    (message.readDuration = $util.Long.fromValue(object.readDuration)).unsigned = false;
                else if (typeof object.readDuration === "string")
                    message.readDuration = parseInt(object.readDuration, 10);
                else if (typeof object.readDuration === "number")
                    message.readDuration = object.readDuration;
                else if (typeof object.readDuration === "object")
                    message.readDuration = new $util.LongBits(object.readDuration.low >>> 0, object.readDuration.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BackupHistory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.BackupHistory
         * @static
         * @param {MihonObjectModel.BackupHistory} message BackupHistory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BackupHistory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.url = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastRead = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastRead = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.readDuration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.readDuration = options.longs === String ? "0" : 0;
            }
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.lastRead != null && message.hasOwnProperty("lastRead"))
                if (typeof message.lastRead === "number")
                    object.lastRead = options.longs === String ? String(message.lastRead) : message.lastRead;
                else
                    object.lastRead = options.longs === String ? $util.Long.prototype.toString.call(message.lastRead) : options.longs === Number ? new $util.LongBits(message.lastRead.low >>> 0, message.lastRead.high >>> 0).toNumber() : message.lastRead;
            if (message.readDuration != null && message.hasOwnProperty("readDuration"))
                if (typeof message.readDuration === "number")
                    object.readDuration = options.longs === String ? String(message.readDuration) : message.readDuration;
                else
                    object.readDuration = options.longs === String ? $util.Long.prototype.toString.call(message.readDuration) : options.longs === Number ? new $util.LongBits(message.readDuration.low >>> 0, message.readDuration.high >>> 0).toNumber() : message.readDuration;
            return object;
        };

        /**
         * Converts this BackupHistory to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.BackupHistory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BackupHistory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BackupHistory
         * @function getTypeUrl
         * @memberof MihonObjectModel.BackupHistory
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BackupHistory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.BackupHistory";
        };

        return BackupHistory;
    })();

    /**
     * UpdateStrategy enum.
     * @name MihonObjectModel.UpdateStrategy
     * @enum {number}
     * @property {number} ALWAYS_UPDATE=0 ALWAYS_UPDATE value
     * @property {number} ONLY_FETCH_ONCE=1 ONLY_FETCH_ONCE value
     */
    MihonObjectModel.UpdateStrategy = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ALWAYS_UPDATE"] = 0;
        values[valuesById[1] = "ONLY_FETCH_ONCE"] = 1;
        return values;
    })();

    MihonObjectModel.PreferenceValue = (function() {

        /**
         * Properties of a PreferenceValue.
         * @memberof MihonObjectModel
         * @interface IPreferenceValue
         * @property {string} type PreferenceValue type
         * @property {Uint8Array} value PreferenceValue value
         */

        /**
         * Constructs a new PreferenceValue.
         * @memberof MihonObjectModel
         * @classdesc Represents a PreferenceValue.
         * @implements IPreferenceValue
         * @constructor
         * @param {MihonObjectModel.IPreferenceValue=} [properties] Properties to set
         */
        function PreferenceValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PreferenceValue type.
         * @member {string} type
         * @memberof MihonObjectModel.PreferenceValue
         * @instance
         */
        PreferenceValue.prototype.type = "";

        /**
         * PreferenceValue value.
         * @member {Uint8Array} value
         * @memberof MihonObjectModel.PreferenceValue
         * @instance
         */
        PreferenceValue.prototype.value = $util.newBuffer([]);

        /**
         * Creates a new PreferenceValue instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.PreferenceValue
         * @static
         * @param {MihonObjectModel.IPreferenceValue=} [properties] Properties to set
         * @returns {MihonObjectModel.PreferenceValue} PreferenceValue instance
         */
        PreferenceValue.create = function create(properties) {
            return new PreferenceValue(properties);
        };

        /**
         * Encodes the specified PreferenceValue message. Does not implicitly {@link MihonObjectModel.PreferenceValue.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.PreferenceValue
         * @static
         * @param {MihonObjectModel.IPreferenceValue} message PreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreferenceValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
            return writer;
        };

        /**
         * Encodes the specified PreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.PreferenceValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.PreferenceValue
         * @static
         * @param {MihonObjectModel.IPreferenceValue} message PreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreferenceValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PreferenceValue message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.PreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.PreferenceValue} PreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreferenceValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.PreferenceValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.value = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a PreferenceValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.PreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.PreferenceValue} PreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreferenceValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreferenceValue message.
         * @function verify
         * @memberof MihonObjectModel.PreferenceValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreferenceValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.type))
                return "type: string expected";
            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                return "value: buffer expected";
            return null;
        };

        /**
         * Creates a PreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.PreferenceValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.PreferenceValue} PreferenceValue
         */
        PreferenceValue.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.PreferenceValue)
                return object;
            var message = new $root.MihonObjectModel.PreferenceValue();
            if (object.type != null)
                message.type = String(object.type);
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length >= 0)
                    message.value = object.value;
            return message;
        };

        /**
         * Creates a plain object from a PreferenceValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.PreferenceValue
         * @static
         * @param {MihonObjectModel.PreferenceValue} message PreferenceValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreferenceValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            return object;
        };

        /**
         * Converts this PreferenceValue to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.PreferenceValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreferenceValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PreferenceValue
         * @function getTypeUrl
         * @memberof MihonObjectModel.PreferenceValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PreferenceValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.PreferenceValue";
        };

        return PreferenceValue;
    })();

    MihonObjectModel.BooleanPreferenceValue = (function() {

        /**
         * Properties of a BooleanPreferenceValue.
         * @memberof MihonObjectModel
         * @interface IBooleanPreferenceValue
         * @property {boolean} value BooleanPreferenceValue value
         */

        /**
         * Constructs a new BooleanPreferenceValue.
         * @memberof MihonObjectModel
         * @classdesc Represents a BooleanPreferenceValue.
         * @implements IBooleanPreferenceValue
         * @constructor
         * @param {MihonObjectModel.IBooleanPreferenceValue=} [properties] Properties to set
         */
        function BooleanPreferenceValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BooleanPreferenceValue value.
         * @member {boolean} value
         * @memberof MihonObjectModel.BooleanPreferenceValue
         * @instance
         */
        BooleanPreferenceValue.prototype.value = false;

        /**
         * Creates a new BooleanPreferenceValue instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.BooleanPreferenceValue
         * @static
         * @param {MihonObjectModel.IBooleanPreferenceValue=} [properties] Properties to set
         * @returns {MihonObjectModel.BooleanPreferenceValue} BooleanPreferenceValue instance
         */
        BooleanPreferenceValue.create = function create(properties) {
            return new BooleanPreferenceValue(properties);
        };

        /**
         * Encodes the specified BooleanPreferenceValue message. Does not implicitly {@link MihonObjectModel.BooleanPreferenceValue.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.BooleanPreferenceValue
         * @static
         * @param {MihonObjectModel.IBooleanPreferenceValue} message BooleanPreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BooleanPreferenceValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
            return writer;
        };

        /**
         * Encodes the specified BooleanPreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.BooleanPreferenceValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.BooleanPreferenceValue
         * @static
         * @param {MihonObjectModel.IBooleanPreferenceValue} message BooleanPreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BooleanPreferenceValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BooleanPreferenceValue message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.BooleanPreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.BooleanPreferenceValue} BooleanPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BooleanPreferenceValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.BooleanPreferenceValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a BooleanPreferenceValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.BooleanPreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.BooleanPreferenceValue} BooleanPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BooleanPreferenceValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BooleanPreferenceValue message.
         * @function verify
         * @memberof MihonObjectModel.BooleanPreferenceValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BooleanPreferenceValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.value !== "boolean")
                return "value: boolean expected";
            return null;
        };

        /**
         * Creates a BooleanPreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.BooleanPreferenceValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.BooleanPreferenceValue} BooleanPreferenceValue
         */
        BooleanPreferenceValue.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.BooleanPreferenceValue)
                return object;
            var message = new $root.MihonObjectModel.BooleanPreferenceValue();
            if (object.value != null)
                message.value = Boolean(object.value);
            return message;
        };

        /**
         * Creates a plain object from a BooleanPreferenceValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.BooleanPreferenceValue
         * @static
         * @param {MihonObjectModel.BooleanPreferenceValue} message BooleanPreferenceValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BooleanPreferenceValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = false;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this BooleanPreferenceValue to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.BooleanPreferenceValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BooleanPreferenceValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BooleanPreferenceValue
         * @function getTypeUrl
         * @memberof MihonObjectModel.BooleanPreferenceValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BooleanPreferenceValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.BooleanPreferenceValue";
        };

        return BooleanPreferenceValue;
    })();

    MihonObjectModel.FloatPreferenceValue = (function() {

        /**
         * Properties of a FloatPreferenceValue.
         * @memberof MihonObjectModel
         * @interface IFloatPreferenceValue
         * @property {number} value FloatPreferenceValue value
         */

        /**
         * Constructs a new FloatPreferenceValue.
         * @memberof MihonObjectModel
         * @classdesc Represents a FloatPreferenceValue.
         * @implements IFloatPreferenceValue
         * @constructor
         * @param {MihonObjectModel.IFloatPreferenceValue=} [properties] Properties to set
         */
        function FloatPreferenceValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FloatPreferenceValue value.
         * @member {number} value
         * @memberof MihonObjectModel.FloatPreferenceValue
         * @instance
         */
        FloatPreferenceValue.prototype.value = 0;

        /**
         * Creates a new FloatPreferenceValue instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.FloatPreferenceValue
         * @static
         * @param {MihonObjectModel.IFloatPreferenceValue=} [properties] Properties to set
         * @returns {MihonObjectModel.FloatPreferenceValue} FloatPreferenceValue instance
         */
        FloatPreferenceValue.create = function create(properties) {
            return new FloatPreferenceValue(properties);
        };

        /**
         * Encodes the specified FloatPreferenceValue message. Does not implicitly {@link MihonObjectModel.FloatPreferenceValue.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.FloatPreferenceValue
         * @static
         * @param {MihonObjectModel.IFloatPreferenceValue} message FloatPreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FloatPreferenceValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
            return writer;
        };

        /**
         * Encodes the specified FloatPreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.FloatPreferenceValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.FloatPreferenceValue
         * @static
         * @param {MihonObjectModel.IFloatPreferenceValue} message FloatPreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FloatPreferenceValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FloatPreferenceValue message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.FloatPreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.FloatPreferenceValue} FloatPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FloatPreferenceValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.FloatPreferenceValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a FloatPreferenceValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.FloatPreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.FloatPreferenceValue} FloatPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FloatPreferenceValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FloatPreferenceValue message.
         * @function verify
         * @memberof MihonObjectModel.FloatPreferenceValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FloatPreferenceValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.value !== "number")
                return "value: number expected";
            return null;
        };

        /**
         * Creates a FloatPreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.FloatPreferenceValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.FloatPreferenceValue} FloatPreferenceValue
         */
        FloatPreferenceValue.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.FloatPreferenceValue)
                return object;
            var message = new $root.MihonObjectModel.FloatPreferenceValue();
            if (object.value != null)
                message.value = Number(object.value);
            return message;
        };

        /**
         * Creates a plain object from a FloatPreferenceValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.FloatPreferenceValue
         * @static
         * @param {MihonObjectModel.FloatPreferenceValue} message FloatPreferenceValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FloatPreferenceValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = 0;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            return object;
        };

        /**
         * Converts this FloatPreferenceValue to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.FloatPreferenceValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FloatPreferenceValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FloatPreferenceValue
         * @function getTypeUrl
         * @memberof MihonObjectModel.FloatPreferenceValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FloatPreferenceValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.FloatPreferenceValue";
        };

        return FloatPreferenceValue;
    })();

    MihonObjectModel.IntPreferenceValue = (function() {

        /**
         * Properties of an IntPreferenceValue.
         * @memberof MihonObjectModel
         * @interface IIntPreferenceValue
         * @property {number} value IntPreferenceValue value
         */

        /**
         * Constructs a new IntPreferenceValue.
         * @memberof MihonObjectModel
         * @classdesc Represents an IntPreferenceValue.
         * @implements IIntPreferenceValue
         * @constructor
         * @param {MihonObjectModel.IIntPreferenceValue=} [properties] Properties to set
         */
        function IntPreferenceValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IntPreferenceValue value.
         * @member {number} value
         * @memberof MihonObjectModel.IntPreferenceValue
         * @instance
         */
        IntPreferenceValue.prototype.value = 0;

        /**
         * Creates a new IntPreferenceValue instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.IntPreferenceValue
         * @static
         * @param {MihonObjectModel.IIntPreferenceValue=} [properties] Properties to set
         * @returns {MihonObjectModel.IntPreferenceValue} IntPreferenceValue instance
         */
        IntPreferenceValue.create = function create(properties) {
            return new IntPreferenceValue(properties);
        };

        /**
         * Encodes the specified IntPreferenceValue message. Does not implicitly {@link MihonObjectModel.IntPreferenceValue.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.IntPreferenceValue
         * @static
         * @param {MihonObjectModel.IIntPreferenceValue} message IntPreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntPreferenceValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
            return writer;
        };

        /**
         * Encodes the specified IntPreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.IntPreferenceValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.IntPreferenceValue
         * @static
         * @param {MihonObjectModel.IIntPreferenceValue} message IntPreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntPreferenceValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IntPreferenceValue message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.IntPreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.IntPreferenceValue} IntPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntPreferenceValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.IntPreferenceValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes an IntPreferenceValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.IntPreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.IntPreferenceValue} IntPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntPreferenceValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IntPreferenceValue message.
         * @function verify
         * @memberof MihonObjectModel.IntPreferenceValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntPreferenceValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.value))
                return "value: integer expected";
            return null;
        };

        /**
         * Creates an IntPreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.IntPreferenceValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.IntPreferenceValue} IntPreferenceValue
         */
        IntPreferenceValue.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.IntPreferenceValue)
                return object;
            var message = new $root.MihonObjectModel.IntPreferenceValue();
            if (object.value != null)
                message.value = object.value | 0;
            return message;
        };

        /**
         * Creates a plain object from an IntPreferenceValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.IntPreferenceValue
         * @static
         * @param {MihonObjectModel.IntPreferenceValue} message IntPreferenceValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IntPreferenceValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = 0;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this IntPreferenceValue to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.IntPreferenceValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IntPreferenceValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IntPreferenceValue
         * @function getTypeUrl
         * @memberof MihonObjectModel.IntPreferenceValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IntPreferenceValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.IntPreferenceValue";
        };

        return IntPreferenceValue;
    })();

    MihonObjectModel.LongPreferenceValue = (function() {

        /**
         * Properties of a LongPreferenceValue.
         * @memberof MihonObjectModel
         * @interface ILongPreferenceValue
         * @property {number|Long} value LongPreferenceValue value
         */

        /**
         * Constructs a new LongPreferenceValue.
         * @memberof MihonObjectModel
         * @classdesc Represents a LongPreferenceValue.
         * @implements ILongPreferenceValue
         * @constructor
         * @param {MihonObjectModel.ILongPreferenceValue=} [properties] Properties to set
         */
        function LongPreferenceValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LongPreferenceValue value.
         * @member {number|Long} value
         * @memberof MihonObjectModel.LongPreferenceValue
         * @instance
         */
        LongPreferenceValue.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LongPreferenceValue instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.LongPreferenceValue
         * @static
         * @param {MihonObjectModel.ILongPreferenceValue=} [properties] Properties to set
         * @returns {MihonObjectModel.LongPreferenceValue} LongPreferenceValue instance
         */
        LongPreferenceValue.create = function create(properties) {
            return new LongPreferenceValue(properties);
        };

        /**
         * Encodes the specified LongPreferenceValue message. Does not implicitly {@link MihonObjectModel.LongPreferenceValue.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.LongPreferenceValue
         * @static
         * @param {MihonObjectModel.ILongPreferenceValue} message LongPreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongPreferenceValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
            return writer;
        };

        /**
         * Encodes the specified LongPreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.LongPreferenceValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.LongPreferenceValue
         * @static
         * @param {MihonObjectModel.ILongPreferenceValue} message LongPreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongPreferenceValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LongPreferenceValue message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.LongPreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.LongPreferenceValue} LongPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongPreferenceValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.LongPreferenceValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a LongPreferenceValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.LongPreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.LongPreferenceValue} LongPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongPreferenceValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LongPreferenceValue message.
         * @function verify
         * @memberof MihonObjectModel.LongPreferenceValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LongPreferenceValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                return "value: integer|Long expected";
            return null;
        };

        /**
         * Creates a LongPreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.LongPreferenceValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.LongPreferenceValue} LongPreferenceValue
         */
        LongPreferenceValue.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.LongPreferenceValue)
                return object;
            var message = new $root.MihonObjectModel.LongPreferenceValue();
            if (object.value != null)
                if ($util.Long)
                    (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                else if (typeof object.value === "string")
                    message.value = parseInt(object.value, 10);
                else if (typeof object.value === "number")
                    message.value = object.value;
                else if (typeof object.value === "object")
                    message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LongPreferenceValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.LongPreferenceValue
         * @static
         * @param {MihonObjectModel.LongPreferenceValue} message LongPreferenceValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LongPreferenceValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.value = options.longs === String ? "0" : 0;
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value === "number")
                    object.value = options.longs === String ? String(message.value) : message.value;
                else
                    object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
            return object;
        };

        /**
         * Converts this LongPreferenceValue to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.LongPreferenceValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LongPreferenceValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LongPreferenceValue
         * @function getTypeUrl
         * @memberof MihonObjectModel.LongPreferenceValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LongPreferenceValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.LongPreferenceValue";
        };

        return LongPreferenceValue;
    })();

    MihonObjectModel.StringPreferenceValue = (function() {

        /**
         * Properties of a StringPreferenceValue.
         * @memberof MihonObjectModel
         * @interface IStringPreferenceValue
         * @property {string} value StringPreferenceValue value
         */

        /**
         * Constructs a new StringPreferenceValue.
         * @memberof MihonObjectModel
         * @classdesc Represents a StringPreferenceValue.
         * @implements IStringPreferenceValue
         * @constructor
         * @param {MihonObjectModel.IStringPreferenceValue=} [properties] Properties to set
         */
        function StringPreferenceValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StringPreferenceValue value.
         * @member {string} value
         * @memberof MihonObjectModel.StringPreferenceValue
         * @instance
         */
        StringPreferenceValue.prototype.value = "";

        /**
         * Creates a new StringPreferenceValue instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.StringPreferenceValue
         * @static
         * @param {MihonObjectModel.IStringPreferenceValue=} [properties] Properties to set
         * @returns {MihonObjectModel.StringPreferenceValue} StringPreferenceValue instance
         */
        StringPreferenceValue.create = function create(properties) {
            return new StringPreferenceValue(properties);
        };

        /**
         * Encodes the specified StringPreferenceValue message. Does not implicitly {@link MihonObjectModel.StringPreferenceValue.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.StringPreferenceValue
         * @static
         * @param {MihonObjectModel.IStringPreferenceValue} message StringPreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringPreferenceValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified StringPreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.StringPreferenceValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.StringPreferenceValue
         * @static
         * @param {MihonObjectModel.IStringPreferenceValue} message StringPreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringPreferenceValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StringPreferenceValue message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.StringPreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.StringPreferenceValue} StringPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringPreferenceValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.StringPreferenceValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a StringPreferenceValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.StringPreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.StringPreferenceValue} StringPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringPreferenceValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StringPreferenceValue message.
         * @function verify
         * @memberof MihonObjectModel.StringPreferenceValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StringPreferenceValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.value))
                return "value: string expected";
            return null;
        };

        /**
         * Creates a StringPreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.StringPreferenceValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.StringPreferenceValue} StringPreferenceValue
         */
        StringPreferenceValue.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.StringPreferenceValue)
                return object;
            var message = new $root.MihonObjectModel.StringPreferenceValue();
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a StringPreferenceValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.StringPreferenceValue
         * @static
         * @param {MihonObjectModel.StringPreferenceValue} message StringPreferenceValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StringPreferenceValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = "";
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this StringPreferenceValue to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.StringPreferenceValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StringPreferenceValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StringPreferenceValue
         * @function getTypeUrl
         * @memberof MihonObjectModel.StringPreferenceValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StringPreferenceValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.StringPreferenceValue";
        };

        return StringPreferenceValue;
    })();

    MihonObjectModel.StringSetPreferenceValue = (function() {

        /**
         * Properties of a StringSetPreferenceValue.
         * @memberof MihonObjectModel
         * @interface IStringSetPreferenceValue
         * @property {Array.<string>|null} [value] StringSetPreferenceValue value
         */

        /**
         * Constructs a new StringSetPreferenceValue.
         * @memberof MihonObjectModel
         * @classdesc Represents a StringSetPreferenceValue.
         * @implements IStringSetPreferenceValue
         * @constructor
         * @param {MihonObjectModel.IStringSetPreferenceValue=} [properties] Properties to set
         */
        function StringSetPreferenceValue(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StringSetPreferenceValue value.
         * @member {Array.<string>} value
         * @memberof MihonObjectModel.StringSetPreferenceValue
         * @instance
         */
        StringSetPreferenceValue.prototype.value = $util.emptyArray;

        /**
         * Creates a new StringSetPreferenceValue instance using the specified properties.
         * @function create
         * @memberof MihonObjectModel.StringSetPreferenceValue
         * @static
         * @param {MihonObjectModel.IStringSetPreferenceValue=} [properties] Properties to set
         * @returns {MihonObjectModel.StringSetPreferenceValue} StringSetPreferenceValue instance
         */
        StringSetPreferenceValue.create = function create(properties) {
            return new StringSetPreferenceValue(properties);
        };

        /**
         * Encodes the specified StringSetPreferenceValue message. Does not implicitly {@link MihonObjectModel.StringSetPreferenceValue.verify|verify} messages.
         * @function encode
         * @memberof MihonObjectModel.StringSetPreferenceValue
         * @static
         * @param {MihonObjectModel.IStringSetPreferenceValue} message StringSetPreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringSetPreferenceValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length)
                for (var i = 0; i < message.value.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value[i]);
            return writer;
        };

        /**
         * Encodes the specified StringSetPreferenceValue message, length delimited. Does not implicitly {@link MihonObjectModel.StringSetPreferenceValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MihonObjectModel.StringSetPreferenceValue
         * @static
         * @param {MihonObjectModel.IStringSetPreferenceValue} message StringSetPreferenceValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringSetPreferenceValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StringSetPreferenceValue message from the specified reader or buffer.
         * @function decode
         * @memberof MihonObjectModel.StringSetPreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MihonObjectModel.StringSetPreferenceValue} StringSetPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringSetPreferenceValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MihonObjectModel.StringSetPreferenceValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StringSetPreferenceValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MihonObjectModel.StringSetPreferenceValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MihonObjectModel.StringSetPreferenceValue} StringSetPreferenceValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringSetPreferenceValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StringSetPreferenceValue message.
         * @function verify
         * @memberof MihonObjectModel.StringSetPreferenceValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StringSetPreferenceValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!Array.isArray(message.value))
                    return "value: array expected";
                for (var i = 0; i < message.value.length; ++i)
                    if (!$util.isString(message.value[i]))
                        return "value: string[] expected";
            }
            return null;
        };

        /**
         * Creates a StringSetPreferenceValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MihonObjectModel.StringSetPreferenceValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MihonObjectModel.StringSetPreferenceValue} StringSetPreferenceValue
         */
        StringSetPreferenceValue.fromObject = function fromObject(object) {
            if (object instanceof $root.MihonObjectModel.StringSetPreferenceValue)
                return object;
            var message = new $root.MihonObjectModel.StringSetPreferenceValue();
            if (object.value) {
                if (!Array.isArray(object.value))
                    throw TypeError(".MihonObjectModel.StringSetPreferenceValue.value: array expected");
                message.value = [];
                for (var i = 0; i < object.value.length; ++i)
                    message.value[i] = String(object.value[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a StringSetPreferenceValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MihonObjectModel.StringSetPreferenceValue
         * @static
         * @param {MihonObjectModel.StringSetPreferenceValue} message StringSetPreferenceValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StringSetPreferenceValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.value = [];
            if (message.value && message.value.length) {
                object.value = [];
                for (var j = 0; j < message.value.length; ++j)
                    object.value[j] = message.value[j];
            }
            return object;
        };

        /**
         * Converts this StringSetPreferenceValue to JSON.
         * @function toJSON
         * @memberof MihonObjectModel.StringSetPreferenceValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StringSetPreferenceValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StringSetPreferenceValue
         * @function getTypeUrl
         * @memberof MihonObjectModel.StringSetPreferenceValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StringSetPreferenceValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MihonObjectModel.StringSetPreferenceValue";
        };

        return StringSetPreferenceValue;
    })();

    return MihonObjectModel;
})();

module.exports = $root;
