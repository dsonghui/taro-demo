import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { ComponentType } from "react";
import { ProfileEntity } from "@/entities/UserEntity";

interface IPropsProfile {

}

interface IStateProfile {
  profile: ProfileEntity;
}


@inject('counterStore')
@observer
class TestIndex extends Component<IPropsProfile, IStateProfile> {
  state: any;
  constructor(props) {
    super(props);
    this.state = {
      profile: new ProfileEntity()
    }
  }

  config: Config = {
    navigationBarTitleText: '我的资料'
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

  }

  render() {
    return (
      <View className='profile-page'>
        profile-page
      </View>
    )
  }
}

export default TestIndex as ComponentType
