import { ref } from 'vue'

//Initialize
export const displayTaskList = ref(false)
export const addButtonState = ref(false)
export const hideCompleted = ref(false)
export const editModeState = ref(false)
export const checkBoxState = ref(true)
export const selectedCategory = ref('default')
export const selectedShowCategory = ref('default')
export const selectedShowCategoryState = ref(false)
export const showCategoryOptions = ref(false)
export const displayLifeCategory = ref(false)
export const displayEducationCategory = ref(false)
export const displayWorkCategory = ref(false)
export const displayNatureCategory = ref(false)
export const displayOthersCategory = ref(false)

export function showSelectedCategory(dataReceived) {
  selectedShowCategory.value = dataReceived
}
