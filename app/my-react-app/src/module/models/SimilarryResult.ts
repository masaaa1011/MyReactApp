import ISimilarlyResult from './interface/ISimilarlyResult'

export default class SimilarryResult {

    private result: ISimilarlyResult;

    /**
     * 採点結果オブジェクトを受け取る
     * @param result 
     */
    constructor(result: ISimilarlyResult) {
        this.result = {
                         username: result.username,
                         createdDate: result.createdDate,
                         picture: result.picture,
                         Description: result.Description
                        };
    }

    /**
     * 採点結果オブジェクトを返す
     */
    public GetSimilaryResult = () => this.result;

    /**
     * ユーザネームを返す
     */
    public GetUserName = () => this.result.username;

    /**
     * 作成日時を返す
     */
    public GetCreatedDate = () => this.result.createdDate;
    public GetPicture = () => this.result.picture;
    public GetDescription = () => this.result.Description;
}