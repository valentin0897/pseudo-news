export function isSmallNews(index: number, numberMediumNews: number, numberSmallNews: number) {
    let pageNewsTotal = numberMediumNews + numberSmallNews

    if (index % pageNewsTotal < numberSmallNews){
      return true
    } 
    return false
  }