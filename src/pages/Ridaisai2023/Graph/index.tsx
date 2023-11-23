import styled from '@emotion/styled'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const dummyData = [
  {
    name: '',
    amt: 2400,
  },
  {
    name: '',
    amt: 2210,
  },
  {
    name: '',
    amt: 2290,
  },
  {
    name: '11:00',
    amt: 2000,
  },
  {
    name: '',
    amt: 2400,
  },
  {
    name: '',
    amt: 2210,
  },
  {
    name: '',
    amt: 2290,
  },
  {
    name: '12:00',
    amt: 2000,
  },
  {
    name: '',
    amt: 2400,
  },
  {
    name: '',
    amt: 2210,
  },
  {
    name: '',
    amt: 2290,
  },
  {
    name: '13:00',
    amt: 2000,
  },
  {
    name: '',
    amt: 2400,
  },
  {
    name: '',
    amt: 2210,
  },
  {
    name: '',
    amt: 2290,
  },
  {
    name: '14:00',
    amt: 2000,
  },
  {
    name: '',
    amt: 2400,
  },
  {
    name: '',
    amt: 2210,
  },
  {
    name: '',
    amt: 2290,
  },
  {
    name: '15:00',
    amt: 2000,
  },
  {
    name: '',
    amt: 2400,
  },
  {
    name: '',
    amt: 2210,
  },
  {
    name: '',
    amt: 2290,
  },
  {
    name: '16:00',
    amt: 2000,
  },
  {
    name: '',
    amt: 2400,
  },
  {
    name: '',
    amt: 2210,
  },
  {
    name: '',
    amt: 2290,
  },
  {
    name: '17:00',
    amt: 2000,
  },
  {
    name: '',
    amt: 2400,
  },
  {
    name: '',
    amt: 2210,
  },
  {
    name: '',
    amt: 2290,
  },
  {
    name: '18:00',
    amt: 2000,
  },
  {
    name: '',
    amt: 2400,
  },
  {
    name: '',
    amt: 2210,
  },
  {
    name: '',
    amt: 2290,
  },
  {
    name: '19:00',
    amt: 2000,
  },
  {
    name: '',
    amt: 2400,
  },
  {
    name: '',
    amt: 2210,
  },
  {
    name: '',
    amt: 2290,
  },
  {
    name: '20:00',
    amt: 2000,
  },
]

const Container = styled.div`
  width: 90%;
  height: 40em;
  margin: auto;
`

export const Example = () => {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dummyData}
          barGap={0}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap={5}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amt" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  )
}
