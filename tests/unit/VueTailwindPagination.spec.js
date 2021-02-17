import { shallowMount } from '@vue/test-utils'
import VueTailwindPagination from '../../src/components/VueTailwindPagination/index.vue'

var assert = require('assert');

describe('vue-tailwind-pagination', () => {

    it('default texts before/after input', () => {

        const defaultTextBeforeInput = 'Go to page'
        const defaultTextAfterInput = 'Go'

        const wrapper = shallowMount(VueTailwindPagination, {
            props: {
                current: 1,
                perPage: 5,
                total: 20
            }
        })

        const textBeboreInput = wrapper.find('span#text-before-input')
        assert.strictEqual(textBeboreInput.text(), defaultTextBeforeInput)

        const textAfterInput = wrapper.find('span#text-after-input')
        assert.strictEqual(textAfterInput.text(), defaultTextAfterInput)
    })

    it('custom texts before/after input', () => {

        const customTextBeforeInput = 'Перейти к странице'
        const customTextAfterInput = 'Вперед'

        const wrapper = shallowMount(VueTailwindPagination, {
            props: {
                current: 1,
                perPage: 5,
                total: 20,
                textBeforeInput: customTextBeforeInput,
                textAfterInput: customTextAfterInput
            }
        })

        const textBeboreInput = wrapper.find('span#text-before-input')
        assert.strictEqual(textBeboreInput.text(), customTextBeforeInput)

        const textAfterInput = wrapper.find('span#text-after-input')
        assert.strictEqual(textAfterInput.text(), customTextAfterInput)
    })
})
