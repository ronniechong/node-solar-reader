export const checkData = (data) => {
  if (!data) {
    return undefined;
  }

  if (data.error) {
    // console.error(data.error);
    return { error: data.error };
  }
  return data;
};

export const calculateKW = (num) => {
  if (Math.abs(num) >= 1000) {
    return {
      value: Math.round((num + 0.00001)) / 1000,
      unit: 'kW',
    }
  }
  return {
    value: Math.abs(Math.round(num)),
    unit: 'W',
  }
}

export const getColorStatus = (str) => {
  switch(str) {
    case 'positive': return '#81F495';
    case 'negative': return '#E84855';
    case 'warning': return '#FED766';
    case 'normal':
    default: return '#272727';
  }
};
