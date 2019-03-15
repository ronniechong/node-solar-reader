import React from 'react';
import { observer, inject } from 'mobx-react';
import { ResponsiveLine } from '@nivo/line';

@inject('visualStore')
@observer
class Visual extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.visualStore.firebase);
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
            y: -196,
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
    ];
    return (
      <div style={{ maxWidth: '100%', width: '80vw', height: '80vh', border: '1px solid red' }}>
        <ResponsiveLine
          curve="cardinal"
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
          // legends={[
          //   {
          //     anchor: 'bottom-right',
          //     direction: 'column',
          //     justify: false,
          //     translateX: 100,
          //     translateY: 0,
          //     itemsSpacing: 0,
          //     itemDirection: 'left-to-right',
          //     itemWidth: 80,
          //     itemHeight: 20,
          //     itemOpacity: 0.75,
          //     symbolSize: 12,
          //     symbolShape: 'circle',
          //     symbolBorderColor: 'rgba(0, 0, 0, .5)',
          //     effects: [
          //       {
          //         on: 'hover',
          //         style: {
          //           itemBackground: 'rgba(0, 0, 0, .03)',
          //           itemOpacity: 1,
          //         },
          //       },
          //     ],
          //   },
          // ]}
        />
      </div>
    );
  }
}
export default Visual;
