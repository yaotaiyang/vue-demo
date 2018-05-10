import { destroyVM, createTest } from '../util'
import Test from '@/components/Test'

describe('Test', () => {
  var vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('测试获取元素内容', () => {
    vm = createTest(Test, {
      name: 'hello'
    }, true)
    expect(vm.$el.querySelector('.name').textContent).toEqual('llyhello')
  })
})
