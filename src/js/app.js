import GameSavingLoader from './load';

export default async function appFunc(obj) {
    try {
        const saving = await GameSavingLoader.load(obj);
        return JSON.parse(saving);
    } catch (e) {
        return 'parse error';
    }
}
