import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Notification from "../notification/ElNotification.vue"

describe('Notification', () => {
  const title = 'this is a title'
  const message = 'this is a message'
  const position = 'bottom-right'
  const verticalOffset = 50
  
  const wrapper = mount(Notification, {
    props: {
      title,
      message,
      position,
      verticalOffset
    }
  })

  it ('渲染标题title', ()=>{
    expect(wrapper.get('.el-notification__title').text()).toBe(title)
  })

  it('信息message渲染', () => {
    expect(wrapper.get('.el-notification__content').text()).toBe(message)
  })

  it('位置渲染', () =>{
    expect(wrapper.find('.el-notification').classes()).toContain('right')
    expect(wrapper.vm.verticalProperty).toBe('bottom')
    expect(wrapper.find('.el-notification').element.style.bottom).toBe('0px')
  })
})