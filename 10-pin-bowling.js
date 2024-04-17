function bowlingScore(frames) {
    var frameArr = frames.split(' ');
    var runningTotal = 0;
    for (let i = 0; i < frameArr.length; ++i) {
        for (let x = 0; x < frameArr[i].length; ++x) {
            let indiScore = frameArr[i][x];
            let prevElement = x - 1;
            let subsequentCell = i + 1;
            if (+indiScore === 0)
                continue;
            if (+indiScore > 0 && +indiScore < 10) {
                runningTotal += +indiScore;
            } else if (indiScore === '/') {
                if (subsequentCell < frameArr.length) {
                    let subsequentCellEle = frameArr[subsequentCell][0];
                    if (+subsequentCellEle > 0 && +subsequentCellEle < 10) {
                        runningTotal += 10 + +frameArr[subsequentCell][0] - +frameArr[i][prevElement];
                    } else if (+subsequentCellEle === 0) {
                        runningTotal += 10 - +frameArr[i][prevElement];
                    } else { // is strike
                        runningTotal += 20 - +frameArr[i][prevElement];
                    }
                } else {
                    runningTotal += 10 - +frameArr[i][prevElement];
                }
            } else { // is strike
                if (subsequentCell < frameArr.length) {
                    let subsequentCellEle = frameArr[subsequentCell][0];
                    let subsequentCellEle2 = frameArr[subsequentCell][1];
                    if (+subsequentCellEle > 0 && +subsequentCellEle < 10) {
                        if (+subsequentCellEle2 > 0 && +subsequentCellEle2 < 10) {
                            runningTotal += 10 + +subsequentCellEle + +subsequentCellEle2;
                        } else if (subsequentCellEle2 === '/') { // is spare
                            runningTotal += 20;
                        } else { // 0
                            runningTotal += 10 + +subsequentCellEle;
                        }
                    } else if (subsequentCellEle === 'X') { // is strike
                        runningTotal += 20;
                        if (subsequentCell + 1 < frameArr.length) {
                            let cellAfterStrike = frameArr[subsequentCell + 1][0];
                            if (+cellAfterStrike > 0 && +cellAfterStrike < 10) {
                                runningTotal += +cellAfterStrike;
                            } else if (cellAfterStrike === '0') {
                                continue;
                            } else {
                                runningTotal += 10;
                            }
                        } else { // last cell
                            let lastCell = frameArr[subsequentCell][0];
                            let lastCell2 = frameArr[subsequentCell][1];
                            if (+lastCell > 0 && +lastCell < 10) {
                                if (+lastCell2 > 0 && +lastCell2 < 10) {
                                    runningTotal += +lastCell + +lastCell2;
                                } else {
                                    runningTotal += 10 + +lastCell;
                                }
                            } else { // is strike
                                runningTotal += 10;
                            }
                        }
                    } else if (subsequentCellEle === '0' && subsequentCellEle2 === '/') { // 0 after strike
                        runningTotal += 20;
                    } else if (subsequentCellEle === '0' && +subsequentCellEle2 > 0 ||
                                +subsequentCellEle > 0 && subsequentCellEle2 === '0') {
                        runningTotal += 10 + +subsequentCellEle + +subsequentCellEle2;
                    } else { // both 0s
                        runningTotal += 10;
                    }
                } else {
                    if (+indiScore > 0 && +indiScore < 10) {
                        runningTotal += +indiScore;
                    } else {
                        runningTotal += 10;
                    }
                }
            }
        }
    }
    return runningTotal;
}