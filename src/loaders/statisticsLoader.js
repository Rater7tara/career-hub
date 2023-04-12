const statisticsLoader = async () => {
    const loadedSta = await fetch('data3-marks.json');
    const statistics = await loadedSta.json();
    console.log(statistics);
    return statistics;
}

export default statisticsLoader;