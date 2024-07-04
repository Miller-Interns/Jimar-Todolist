// Styling typescripts
// Used for STYLING

import {computed} from 'vue'

import { addButtonState, displayTaskList, checkBoxState } from '../main-data-flow';

export const toggleAddButtonStyle = computed(() => {
    return addButtonState.value ? colorSoftRed : {};
})

export const toggleDisplayTaskListStyle = computed(() => {
    return displayTaskList.value ? colorSoftRed : {};
})

export const checkBoxStateToggleStyle = computed(() => {
    return checkBoxState ? { 'text-decoration': 'line-through' } : {}
})

//Colors
const colorSoftRed = { 'background-color': '#f44336' }
// const colorSoftGreen = {'background-color' : '#04aa6d'}
// const colorSoftBlue = {'background-color' : 'blue'}
// const opacityMax = {'opacity':'1'}
// const opacityLow = {'opacity':'0.6'}
// const noOpacity = {'opacity':'0'}

//Others
export const lineThrough = { 'text-decoration': 'line-through' };