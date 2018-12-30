import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { ComponentType } from "react";
import './index.less'
import QuestionItem from '../../components/QuestionItem';

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface TestIndex {
  props: PageStateProps;
}

@inject('counterStore')
@observer
class TestIndex extends Component {

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      items: new Array(10).fill(null).map((v, index) => {
        return {
          AutoId: index + 1,
          Name: v + 'Name' + (index + 1),
          checked: null,
          options: [
            {
              text: '-1-',
              value: '1',
            },
            {
              text: '-2-',
              value: '2',
            },
            {
              text: '-3-',
              value: '3',
            },
            {
              text: '-4-',
              value: '4',
            }
          ]
        }
      })
    }
  }


  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleChane(item, value) {
    console.log(value);
    console.log(item);
    this.setState({
      items: this.state.items.map(_item => {
        if (_item.AutoId === item.AutoId) {
          _item.checked = value;
        }
        return _item;
      })
    })
  }

  render() {
    let { items } = this.state;
    return (
      <View className='testIndex'>
        {
          items.map(item => {
            return <View className='testItem' key={item.Name}>
              <Text>{item.Name} ({item.checked})</Text>
              <QuestionItem value={item.checked} options={item.options} onChange={this.handleChane.bind(this, item)}/>
            </View>;
          })
        }
      </View>
    )
  }
}

export default TestIndex as ComponentType
