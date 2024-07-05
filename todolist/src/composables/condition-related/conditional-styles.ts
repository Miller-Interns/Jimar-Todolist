// Styling typescripts
// Used for STYLING

import {computed} from 'vue'

import { addButtonState, displayTaskList } from '../main-data-flow';

export const toggleAddButtonStyle = computed(() => {
    return addButtonState.value ? colorSoftRed : {};
})

export const toggleDisplayTaskListStyle = computed(() => {
    return displayTaskList.value ? colorSoftRed : {};
})

export const checkBoxStateToggleStyle = (isDone:boolean) => { 
        return computed(() => ({ 
            textDecoration:isDone ? 'line-through' : 'none'
    })).value
}



//UNCOMMENT TO USE

//Colors
const colorSoftRed = { 'background-color': '#f44336' }
// const colorSoftGreen = {'background-color' : '#04aa6d'}
// const colorSoftBlue = {'background-color' : 'blue'}

//Others
// const opacityMax = {'opacity':'1'}
// const opacityLow = {'opacity':'0.6'}
// const noOpacity = {'opacity':'0'}