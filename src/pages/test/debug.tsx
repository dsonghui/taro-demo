import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtInput, AtButton, AtCard } from "taro-ui";
import Session from "@/services/Support/Session";
import JCToken from "@/services/Support/Token";

interface IState {
  SessionId: string;
  Token: string;
}

@inject('counterStore')
@observer
export default class DebugPage extends Component<any, IState> {
  state: IState;
  constructor(props) {
    super(props);
    this.state = {
      SessionId: '',
      Token: '',
    }
  }

  config: Config = {
    navigationBarTitleText: '首页'
  }

  handleChange(key, value) {
    let obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  handleSave() {
    if (this.state.SessionId) {
      Session.setSession(this.state.SessionId)
    }
    if (this.state.Token) {
      JCToken.setToken(this.state.Token)
    }
  }

  render() {
    return (
      <View className='page'>
        <View className='doc-header'>
          <View className='doc-header__title'>Debug</View>
        </View>
        <View className='doc-body'>
          <View className='panel'>
            <AtCard>
              <AtInput
                name='value'
                title='SessionId'
                type='text'
                placeholder='SessionId'
                onChange={this.handleChange.bind(this, 'SessionId')}
              />
              <AtInput
                name='value'
                title='token'
                type='text'
                placeholder='token'
                onChange={this.handleChange.bind(this, 'Token')}
              />
              <AtButton
                type='primary'
                onClick={this.handleSave.bind(this)}
              >
                保存
              </AtButton>
            </AtCard>
          </View>
        </View>
      </View>
    )
  }
}
