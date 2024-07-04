// Styling typescripts
// Used for STYLING

// import {ref} from 'vue'
import {computed} from 'vue'

import { addButton_State, displayTaskList } from './conditionals'

export const toggle_AddButton_Style = computed(() => {
    return addButton_State.value ? colorSoftRed : {};
})

export const toggle_DisplayTaskList_Style = computed(() => {
    return displayTaskList.value ? colorSoftRed : {};
})

const colorSoftRed = { 'background-color': '#f44336' }
// const colorSoftGreen = {'background-color' : '#04aa6d'}
// const colorSoftBlue = {'background-color' : 'blue'}