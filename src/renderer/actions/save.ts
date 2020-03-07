import { Action } from 'redux'

import {
  SetUsernameAction,
  SetCharacterAction,
  SetEmuChatAction,
  AddApiKeyAction,
  SetVersionAction,
  SetServerOptionsAction,
  SetGlobalHotkeysEnabledAction,
  SetGamepadIdAction
} from './models/save.model'
import { ElectronServerSaveData } from '../../models/State.model'
import { HotkeyShortcut } from '../../main/HotkeyManager'

export function setUsername (username: string): SetUsernameAction {
  return {
    type: 'SET_USERNAME',
    username
  }
}

export function setCharacter (character: number): SetCharacterAction {
  return {
    type: 'SET_CHARACTER',
    character
  }
}
export function setEmuChat (emuChat: boolean): SetEmuChatAction {
  return {
    type: 'SET_EMU_CHAT',
    emuChat
  }
}
export function setGlobalHotkeysEnabled (globalHotkeysEnabled: boolean): SetGlobalHotkeysEnabledAction {
  return {
    type: 'SET_GLOBAL_HOTKEYS',
    globalHotkeysEnabled
  }
}
export function setHotkeyBindings (hotkeyBindings: { [shortcut in HotkeyShortcut]: string[] }) {
  return {
    type: 'SET_HOTKEY_BINDINGS',
    hotkeyBindings
  }
}
export function setCharacterCyclingOrder (characterCyclingOrder: Array<{characterId: number, on: boolean}>) {
  return {
    type: 'SET_CHARACTER_CYCLING_ORDER',
    characterCyclingOrder
  }
}
export function setGamepadId (gamepadId: string | undefined): SetGamepadIdAction {
  return {
    type: 'SET_GAMEPAD_ID',
    gamepadId
  }
}

export function addApiKey (apiKey: string): AddApiKeyAction {
  return {
    type: 'ADD_API_KEY',
    apiKey
  }
}

export function deleteApiKey (): Action {
  return {
    type: 'DELETE_API_KEY'
  }
}

export function setVersion (version: string): SetVersionAction {
  return {
    type: 'SET_VERSION',
    version
  }
}

export function saveServerOptions (serverOptions: ElectronServerSaveData, apiKey: string): SetServerOptionsAction {
  return {
    type: 'SAVE_SERVER_OPTIONS',
    serverOptions,
    apiKey
  }
}
