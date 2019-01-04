import React from 'react';
import { observer } from 'mobx-react';
import { ResponsiveLine } from '@nivo/line';
import app from 'firebase/app';

@observer
class Visual extends React.Component {
  constructor(props) {
    super(props);

    const config = {
      apiKey: process.env.FIREBASEAPIKEY,
      authDomain: process.env.FIREBASEAUTHDOMAIN,
      databaseURL: process.env.FIREBASEDATABASEURL,
      projectId: process.env.FIREBASEPROJECTID,
      storageBucket: process.env.FIREBASESTORAGEBUCKET,
      messagingSenderId: process.env.FIREBASEMSGSENDERID,
    };

    // this.firebase = app;
    // this.firebase.initializeApp(config);
  }

  componentDidMount() {
    // this.db = this.firebase.database();
  }

  render() {
    const data = [
      {
        id: 'japan',
        color: 'hsl(315, 70%, 50%)',
        data: [
          {
            x: 'plane',
            y: 11,
          },
          {
            x: 'helicopter',
            y: 185,
          },
          {
            x: 'boat',
            y: 196,
          },
          {
            x: 'train',
            y: 222,
          },
          {
            x: 'subway',
            y: 184,
          },
          {
            x: 'bus',
            y: 194,
          },
          {
            x: 'car',
            y: 65,
          },
          {
            x: 'moto',
            y: 38,
          },
          {
            x: 'bicycle',
            y: 237,
          },
          {
            x: 'others',
            y: 246,
          },
        ],
      },
      {
        id: 'france',
        color: 'hsl(359, 70%, 50%)',
        data: [
          {
            x: 'plane',
            y: 130,
          },
          {
            x: 'helicopter',
            y: 145,
          },
          {
            x: 'boat',
            y: 82,
          },
          {
            x: 'train',
            y: 271,
          },
          {
            x: 'subway',
            y: 98,
          },
          {
            x: 'bus',
            y: 295,
          },
          {
            x: 'car',
            y: 40,
          },
          {
            x: 'moto',
            y: 76,
          },
          {
            x: 'bicycle',
            y: 193,
          },
          {
            x: 'others',
            y: 20,
          },
        ],
      },
      {
        id: 'us',
        color: 'hsl(349, 70%, 50%)',
        data: [
          {
            x: 'plane',
            y: 265,
          },
          {
            x: 'helicopter',
            y: 116,
          },
          {
            x: 'boat',
            y: 16,
          },
          {
            x: 'train',
            y: 259,
          },
          {
            x: 'subway',
            y: 244,
          },
          {
            x: 'bus',
            y: 281,
          },
          {
            x: 'car',
            y: 95,
          },
          {
            x: 'moto',
            y: 236,
          },
          {
            x: 'bicycle',
            y: 273,
          },
          {
            x: 'others',
            y: 152,
          },
        ],
      },
      {
        id: 'germany',
        color: 'hsl(180, 70%, 50%)',
        data: [
          {
            x: 'plane',
            y: 102,
          },
          {
            x: 'helicopter',
            y: 115,
          },
          {
            x: 'boat',
            y: 259,
          },
          {
            x: 'train',
            y: 170,
          },
          {
            x: 'subway',
            y: 103,
          },
          {
            x: 'bus',
            y: 183,
          },
          {
            x: 'car',
            y: 67,
          },
          {
            x: 'moto',
            y: 108,
          },
          {
            x: 'bicycle',
            y: 272,
          },
          {
            x: 'others',
            y: 255,
          },
        ],
      },
      {
        id: 'norway',
        color: 'hsl(287, 70%, 50%)',
        data: [
          {
            x: 'plane',
            y: 257,
          },
          {
            x: 'helicopter',
            y: 37,
          },
          {
            x: 'boat',
            y: 240,
          },
          {
            x: 'train',
            y: 269,
          },
          {
            x: 'subway',
            y: 29,
          },
          {
            x: 'bus',
            y: 70,
          },
          {
            x: 'car',
            y: 24,
          },
          {
            x: 'moto',
            y: 45,
          },
          {
            x: 'bicycle',
            y: 226,
          },
          {
            x: 'others',
            y: 228,
          },
        ],
      },
    ];
    return (
      <div style={{ maxWidth: '100%', width: '800px', height: '500px', border: '1px solid red' }}>
        <ResponsiveLine
          data={data}
          margin={{
            top: 50,
            right: 110,
            bottom: 50,
            left: 60,
          }}
          xScale={{
            type: 'point',
          }}
          yScale={{
            type: 'linear',
            stacked: true,
            min: 'auto',
            max: 'auto',
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Timestamp',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Power output',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          dotSize={10}
          dotColor="inherit:darker(0.3)"
          dotBorderWidth={2}
          dotBorderColor="#ffffff"
          enableDotLabel
          dotLabel="y"
          dotLabelYOffset={-12}
          animate
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    );
  }
}
export default Visual;
