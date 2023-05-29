const showFlightPriceChart = (origin, destination) => {
    const selectedFlight = flights.find(flight => flight.origin === origin && flight.destination === destination);
      if (selectedFlight) {
        // Get the price data for the selected flight
        const prices = selectedFlight.prices;

        // Create a chart configuration object
        const chartOptions = {
          title: {
            text: `${selectedFlight.origin} - ${selectedFlight.destination} Flight Price Trend`
          },
          xAxis: {
            categories: prices.map(price => price.date)
          },
          yAxis: {
            title: {
              text: 'Price'
            }
          },
          series: [{
            name: 'Price',
            data: prices.map(price => price.price)
          }]
        };

        // Render the chart using Highcharts
        Highcharts.chart('flight-chart-container', chartOptions);
      }
    };

  const trend = [
    {
      origin: 'TPE',
      destination: 'NRT',
      month: 'June',
      route: '台北 - 東京',
      price: [100, 150, 120, 180, 200, 160, 180, 220, 200, 250, 230, 210, 190, 220, 180, 150, 120, 130, 160, 170, 200, 240, 220, 180, 150, 160, 200, 220, 230, 210]
    },
    {
      origin: 'TPE',
      destination: 'KIX',
      month: 'June',
      route: '台北 - 大阪',
      price: [120, 170, 140, 180, 210, 190, 210, 240, 220, 270, 250, 230, 210, 240, 200, 170, 140, 150, 180, 190, 220, 260, 240, 200, 170, 180, 220, 240, 250, 230]
    },
    {
      origin: 'TPE',
      destination: 'OKA',
      month: 'June',
      route: '台北 - 沖繩',
      price: [90, 140, 110, 150, 180, 160, 180, 210, 190, 240, 220, 200, 180, 210, 170, 140, 110, 120, 150, 160, 190, 230, 210, 170, 140, 150, 190, 210, 220, 200]
    },
    {
      origin: 'TPE',
      destination: 'ICN',
      month: 'June',
      route: '台北 - 首爾',
      price: [150, 200, 170, 210, 240, 220, 240, 270, 250, 300, 280, 260, 240, 270, 230, 200, 170, 180, 210, 220, 250, 290, 270, 230, 200, 210, 250, 270, 280, 260]
    },
    {
      origin: 'TPE',
      destination: 'CJU',
      month: 'June',
      route: '台北 - 濟州島',
      price: [80, 130, 100, 140, 170, 150, 170, 200, 180, 230, 210, 190, 170, 200, 160, 130, 100, 110, 140, 150, 180, 220, 200, 160, 130, 140, 180, 200, 210, 190]
    }
  ];