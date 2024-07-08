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

// COLOR STYLE
const colorSoftRed = { 'background-color': '#f44336' }