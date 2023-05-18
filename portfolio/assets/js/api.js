

async function fetchProfileData () {
    const url = 'https://raw.githubusercontent.com/apollohardrock/projects/main/portfolio/assets/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}