/*
Purpose:
Export/Import conditions
*/

import { displayTaskList, addButtonState, hideCompleted,  } from '../main-data-flow';

//Updating Functions
export function updateDisplayTaskList(update:boolean){
    displayTaskList.value = update;
}

export function updateAddButton_State(update:boolean){
    addButtonState.value = update;
}

export function showIsCompletedState(){
    return hideCompleted.value ? 'Show all' : 'Hide completed'
}

export function toggleSubtask(){
    
}

