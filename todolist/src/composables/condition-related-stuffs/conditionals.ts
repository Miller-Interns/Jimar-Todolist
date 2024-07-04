/*
Purpose:
Export/Import conditions
*/
import {ref} from 'vue'

//Definitions
export const displayTaskList = ref(false);
export const addButton_State = ref(false);
export const hideCompleted = ref(false);
export const editMode = ref(false);
export const Subtask = ref(false)

//Updating Functions
export function updateDisplayTaskList(update:boolean){
    displayTaskList.value = update;
}

export function toggleCondition(){
    displayTaskList.value = !displayTaskList.value;
}

export function updateAddButton_State(update:boolean){
    addButton_State.value = update;
}

export function toggleAddButton_State(){
    addButton_State.value = !addButton_State.value;
    console.log(addButton_State.value)
}

export function toggleHideCompleted(){
    hideCompleted.value = !hideCompleted.value;
}

export function showIsCompletedState(){
    return hideCompleted.value ? 'Show all' : 'Hide completed'
}

export function toggleEditMode(update){
    return update = !update
}

export function toggleSubtask(){
    
}

