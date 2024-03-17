

const FormatPublishedAt = (publishedAt) => {
    const now = new Date();
    const publishedTime = new Date(publishedAt);
    const timeDifference = Math.abs(now - publishedTime);
    
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    if (minutesDifference < 60) {
      return `${minutesDifference} minute${minutesDifference === 1 ? '' : 's'} ago`;
    }
  
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hoursDifference < 24) {
      return `${hoursDifference} hour${hoursDifference === 1 ? '' : 's'} ago`;
    }
  
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (daysDifference < 7) {
      return `${daysDifference} day${daysDifference === 1 ? '' : 's'} ago`;
    }
  
    const weeksDifference = Math.floor(daysDifference / 7);
    if (weeksDifference < 4) {
      return `${weeksDifference} week${weeksDifference === 1 ? '' : 's'} ago`;
    }
  
    const monthsDifference = Math.floor(daysDifference / 30);
    if (monthsDifference < 12) {
      return `${monthsDifference} month${monthsDifference === 1 ? '' : 's'} ago`;
    }
  
    const yearsDifference = Math.floor(monthsDifference / 12);
    return `${yearsDifference} year${yearsDifference === 1 ? '' : 's'} ago`;
  };
  
  export  default FormatPublishedAt;