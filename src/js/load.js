import read from './reader';
import json from './parser';

export default class GameSavingLoader {
    static async load(obj) {
        const data = await read(obj);
        const parsedData = await json(data);
        return parsedData;
    }
}
