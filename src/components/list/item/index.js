
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Switch } from '@tarojs/components'

import PropTypes from 'prop-types'

import AtIcon from '../../icon/index'

import './index.scss'

export default class AtListItem extends Component {
  render () {
    const {
      note,
      arrow,
      title,
      thumb,
      onClick,
      isSwitch,
      extraText,
      extraThumb
    } = this.props

    const rootClass = ['at-list__item']

    if (thumb) {
      rootClass.push('at-list__item--thumb')
    }

    if (note) {
      rootClass.push('at-list__item--multiple')
    }

    return (
      <View className={rootClass} onClick={onClick}>
        {thumb && (
          <View className='at-list__item-thumb item-thumb'>
            <Image className='item-thumb-info' mode='scaleToFill' src={thumb} />
          </View>
        )}
        <View className='at-list__item-content item-contet'>
          <View className='item-contet__info'>
            <View className='item-contet__info-title'>{title}</View>
            {note && <View className='item-contet__info-note'>{note}</View>}
          </View>
        </View>
        <View className='at-list__item-extra item-extra'>
          {extraText && <View className='item-extra__info'>{extraText}</View>}

          {extraThumb &&
            !extraText && (
            <View className='item-extra__image'>
              <Image
                className='item-extra__image-info'
                mode='aspectFit'
                src={extraThumb}
              />
            </View>
          )}

          {isSwitch &&
            !extraThumb &&
            !extraText && (
            <View className='item-extra__switch'>
              <Switch />
            </View>
          )}

          {arrow && (
            <View className='item-extra__icon'>
              <AtIcon value='narrow' color='#c7c7cc' />
            </View>
          )}
        </View>
      </View>
    )
  }
}

AtListItem.defaultProps = {
  onClick: () => {}
}

AtListItem.propTypes = {
  note: PropTypes.string,
  title: PropTypes.string,
  thumb: PropTypes.string,
  onClick: PropTypes.func,
  isSwitch: PropTypes.bool,
  extraText: PropTypes.string,
  extraThumb: PropTypes.string,
  arrow: PropTypes.oneOf(['right', 'top', 'bottom', 'left'])
}