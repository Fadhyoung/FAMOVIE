export default async function GetMoviesAction() {
    const response = await fetch("/FAMOVIE/famovie_list.csv");
    const csvText = await response.text();

    return csvText;
}

export async function getBest3MoviesAction() {
    const response = await fetch("/FAMOVIE/Best3.csv");
    const csvText = await response.text();

    return csvText;
}
