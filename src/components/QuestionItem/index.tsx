import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, RadioGroup, Label, Radio } from '@tarojs/components'

import './index.less'
import { ComponentType } from "react";

type PageStateProps = {
  item: any
  options: any[]
  onChange(value, item): void;
}


class QuestionItem extends Component<PageStateProps> {

  constructor(props) {
    super(props);
    this.handleProxy = this.handleProxy.bind(this);
  }

  handleProxy(e) {
    this.props.onChange(e.detail.value, this.props.item);
  }


  render() {
    let options = this.props.options;
    return (
      <RadioGroup onChange={this.handleProxy}>
        {
          options.map(option => {
            return (
              <Label
                key={option.value}>
                <View>
                  <Radio value={option.value} checked={option.value === this.props.item.checked}/>
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

export default QuestionItem as ComponentType
