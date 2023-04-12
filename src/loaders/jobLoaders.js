const jobLoader = async () => {
    const loadedJobs = await fetch('data2-fea.json');
    const jobs = await loadedJobs.json();
    console.log(jobs);
    return jobs;
}

export default jobLoader;