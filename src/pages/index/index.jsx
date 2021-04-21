import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import cax from '../../components/cax/index'
import * as helper from '../../help'


import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.css'
// import '../../goban.css'

export default class Index extends Component {
  

  componentWillMount () { }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const signMap = [
      [0, 0, 0, -1, -1, -1, 1, 0, 1, 1, -1, -1, 0, -1, 0, -1, -1, 1, 0],
      [0, 0, -1, 0, -1, 1, 1, 1, 0, 1, -1, 0, -1, -1, -1, -1, 1, 1, 0],
      [0, 0, -1, -1, -1, 1, 1, 0, 0, 1, 1, -1, -1, 1, -1, 1, 0, 1, 0],
      [0, 0, 0, 0, -1, -1, 1, 0, 1, -1, 1, 1, 1, 1, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, -1, 0, -1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, -1, 0, 0, -1, -1, 1, 0, -1, -1, 1, -1, -1, 0, 1, 0, 0, 1],
      [0, 0, 0, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1],
      [0, 0, -1, 1, 1, 0, 1, -1, -1, 1, 0, 1, -1, 0, 1, -1, -1, -1, 1],
      [0, 0, -1, -1, 1, 1, 1, 0, -1, 1, -1, -1, 0, -1, -1, 1, 1, 1, 1],
      [0, 0, -1, 1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, 1, -1, -1],
      [-1, -1, -1, -1, 1, 1, 1, -1, 0, -1, 1, -1, -1, 0, -1, 1, 1, -1, 0],
      [-1, 1, -1, 0, -1, -1, -1, -1, -1, -1, 1, -1, 0, -1, -1, 1, -1, 0, -1],
      [1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 0, 1, -1, 0, -1, 1, -1, -1, 0],
      [0, 1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, -1, 1, 1, -1, 1],
      [0, 0, -1, 1, 0, 0, 1, 1, -1, -1, 0, 1, -1, 1, -1, 1, -1, 0, -1],
      [0, 0, 1, 0, 1, 0, 1, 1, 1, -1, -1, 1, -1, -1, 1, -1, -1, -1, 0],
      [0, 0, 0, 0, 1, 1, 0, 1, -1, 0, -1, -1, 1, 1, 1, 1, -1, -1, -1],
      [0, 0, 1, 1, -1, 1, 1, -1, 0, -1, -1, 1, 1, 1, 1, 0, 1, -1, 1],
      [0, 0, 0, 1, -1, -1, -1, -1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0]
    ]
    let {vertexSize, width, height, xs, ys, hoshis} = this.props
    let rangeX = [8, 18]
    let rangeY = [12, 18]
    width = signMap.length === 0 ? 0 : signMap[0].length
    height = signMap.length
    xs = helper.range(width).slice(rangeX[0], rangeX[1] + 1)
    ys = helper.range(height).slice(rangeY[0], rangeY[1] + 1)
    let halfVertexSize = vertexSize / 2
    let fl = Math.floor
    let x = xs[0] === 0? halfVertexSize : 0
    let y_line = ys.map((_, i) => 
      <rect key={i.toString()}
        className='shudan-gridline shudan-horizontal'
        x={fl(x)}
        y={fl((2 * i + 1) * halfVertexSize)}
        width={xs[xs.length - 1] === width - 1 ? fl((2 * xs.length - 1) * halfVertexSize - x) : fl(xs.length * vertexSize -x)}
        height='1'
      >
      </rect>
    )
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton>
        <cax id='myCanvas'></cax>
        <svg 
        >
        <rect x="120" width="100" height="100" rx="15"></rect>
        </svg>
        <Text>这是什么玩意</Text>
      </View>


    )
  }
}
