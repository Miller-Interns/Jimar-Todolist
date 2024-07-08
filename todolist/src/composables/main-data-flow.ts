import {ref} from 'vue'

//Definitions
export const displayTaskList = ref(false);
export const addButtonState = ref(false);
export const hideCompleted = ref(false);
export const editModeState = ref(false);
export const checkBoxState = ref(true);
export const selectedCategory = ref('default');
export const selectedShowCategory = ref('default')
export const selectedShowCategoryState = ref(false)

export function showSelectedCategory(dataReceived){
    selectedShowCategory.value = dataReceived;
}

export function showSelectedCategoryToggle(){
    selectedShowCategoryState.value = !selectedShowCategoryState.value
}