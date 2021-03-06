import ConnectionBase from './connection-base';

class WebFileConnection extends ConnectionBase {
  /**
   * Web file connector structure. It will setup everything to create a QIX internet connection.
   * @public
   * @param {string} url
   * @param {string} fileExtension
   */
  constructor(url, fileExtension) {
    super(url, 'internet');

    const fileExtensionMatch = url.match(/^https?:\/\/.*\/.*\.(\w*)\?.*$/)
      || url.match(/^https?:\/\/.*\/.*\.(\w*)$/);

    this.fileExtension = fileExtension || (fileExtensionMatch && fileExtensionMatch[1]) || 'html';
  }
}
export default WebFileConnection;
