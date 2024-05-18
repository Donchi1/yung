

export const totalDCheck = (data: number) => {
    if (data === 1000) return 10;
    if (data <= 1100 && data > 3000) return 50;
    if (data <= 3100 && data > 5000) return 70;
    if (data >= 7000) return 100;
    return 0;
  }
  