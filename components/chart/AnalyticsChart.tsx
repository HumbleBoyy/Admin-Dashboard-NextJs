"use client"
import { LineChart, XAxis, YAxis, CartesianGrid,ResponsiveContainer, Line } from 'recharts';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import data from '@/data/analytics';

const AnalyticsChart = () => {
    // const data:AnalyticsType[] = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
  return (
    <>
      <Card>
         <CardHeader>
            <CardTitle>
                Analytics For This Year
            </CardTitle>
            <CardDescription>
                View Per Month
            </CardDescription>
         </CardHeader>
         <CardContent>
              <div style={{width:'100%', height:300}}>
                  <ResponsiveContainer>
                      <LineChart width={1100} height={300} data={data}>
                         <Line type={"monotone"} dataKey={"uv"} stroke='#8884d8'/> 
                         <CartesianGrid stroke='#ccc'/>
                         <XAxis dataKey={"name"}/>
                         <YAxis/>
                      </LineChart>
                  </ResponsiveContainer>
              </div>
         </CardContent>
      </Card>
    </>
  )
}

export default AnalyticsChart