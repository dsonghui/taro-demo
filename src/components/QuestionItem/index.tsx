import Taro, { Component } from '@tarojs/taro'
import { View, Text, RadioGroup, Label, Radio } from '@tarojs/components'
import './index.less'

interface IProps {
  value: any;
  options: any[];
  onChange(value): void;
}


export default class QuestionItem extends Component<IProps> {

  constructor(props) {
    super(props);
    this.handleProxy = this.handleProxy.bind(this);
  }

  handleProxy(e) {
    this.props.onChange(e.detail.value);
  }

  render() {
    let options = this.props.options;
    return (
      <RadioGroup onChange={this.handleProxy}>
        {
          options.map(option => {
            return (
              <Label
                key={option.value}
              >
                <View>
                  <Radio value={option.value} checked={option.value === this.props.value}/>
                  <Text>{option.text}</Text>
                </View>
              </Label>
            )
          })
        }
      </RadioGroup>
    )
  }
}
