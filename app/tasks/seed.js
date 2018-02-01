
import seeds from './seeds';

export default async function run() {
    await Object.keys(seeds).map((tableName) => seeds[tableName]).reduce(
        (chain, seed) => chain.then(() => seed.run()),
        Promise.resolve({})
    )
        ;
}

