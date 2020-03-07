import produce from 'immer'

import * as fs from 'fs'
import * as path from 'path'

import { initialState } from '.'
import { SaveAction } from '../actions/models/save.model'
import { SaveState, SaveStateDraft, ElectronSaveDataDraft } from '../../models/State.model'

export const save = (state: SaveState = initialState.save, action: SaveAction) => {
  const nextState = produce<SaveState>(state, (draft: SaveStateDraft<ElectronSaveDataDraft>) => {
    switch (action.type) {
      case 'SET_USERNAME':
        draft.appSaveData.username = action.username
        break
      case 'SET_CHARACTER':
        draft.appSaveData.character = action.character
        break
      case 'SET_EMU_CHAT':
        draft.appSaveData.emuChat = action.emuChat
        break
      case 'SET_GLOBAL_HOTKEYS':
        draft.appSaveData.globalHotkeysEnabled = action.globalHotkeysEnabled
        break
      case 'SET_HOTKEY_BINDINGS':
        draft.appSaveData.hotkeyBindings = action.hotkeyBindings
        break
      case 'SET_CHARACTER_CYCLING_ORDER':
        draft.appSaveData.characterCylingOrder = action.characterCyclingOrder
        break
      case 'SET_GAMEPAD_ID':
        draft.appSaveData.gamepadId = action.gamepadId
        break
      case 'ADD_API_KEY':
        draft.appSaveData.apiKey = action.apiKey
        break
      case 'DELETE_API_KEY':
        draft.appSaveData.apiKey = ''
        break
      case 'SET_VERSION':
        draft.appSaveData.version = action.version
        break
      case 'SAVE_SERVER_OPTIONS':
        draft.appSaveData.apiKey = action.apiKey
        draft.appSaveData.serverOptions = action.serverOptions
        break
    }
  })
  saveState(nextState)
  return nextState
}

function saveState (state: SaveState): void {
  fs.writeFile(path.join(state.appSavePath, 'save.json'), JSON.stringify(state.appSaveData, null, 2), () => {})
}
