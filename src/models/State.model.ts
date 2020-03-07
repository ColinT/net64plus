import { RouterState as ReactRouterState } from 'react-router-redux'

import { Server } from './Server.model'
import { FilteredEmulator, Position } from './Emulator.model'
import { ChildProcess } from 'child_process'
import { HotkeyShortcut } from '../main/HotkeyManager'

export interface ElectronServerSaveDataDraft {
  name: string
  description: string
  gamemode: number
  enableGamemodeVote: boolean
  passwordRequired: boolean
  password: string
  port: number
  enableWebHook: boolean
}
export type ElectronServerSaveData = Readonly<ElectronServerSaveDataDraft>

export interface ElectronSaveDataDraft {
  apiKey: string
  username: string
  character: number
  emuChat: boolean
  globalHotkeysEnabled: boolean
  hotkeyBindings: { [shortcut in HotkeyShortcut]: string[] }
  characterCylingOrder: Array<{characterId: number, on: boolean}>
  gamepadId: string | undefined
  lastIp: string
  lastPort: number
  version: string
  serverOptions: ElectronServerSaveData
}
export type ElectronSaveData = Readonly<ElectronSaveDataDraft>

export interface SaveStateDraft<T> {
  appSaveData: T
  appSavePath: string
}
export type SaveState = Readonly<SaveStateDraft<ElectronSaveData>>

export type RouterStateDraft = ReactRouterState
export type RouterState = Readonly<RouterStateDraft>

export interface ConnectionStateDraft {
  server: Server | null
  playerId: number | null
  selfPos: Position
  cameraAngle: number
  authenticated: boolean
  authenticationThrottle: number
  hasToken: boolean
  error: string
}
export type ConnectionState = Readonly<ConnectionStateDraft>

export interface EmulatorStateDraft {
  emulators: FilteredEmulator[]
  isConnectedToEmulator: boolean
  error: string
}

export type EmulatorState = Readonly<EmulatorStateDraft>

export enum IoChannel {
  Out, Warn, Err
}

export interface ConsoleServerMessage {
  key: string
  message: string
  channel: IoChannel
}

export interface ServerStateDraft {
  process: ChildProcess | null
  exitCode: number | null
  server: Server | null
  messages: ConsoleServerMessage[]
}
export type ServerState = Readonly<ServerStateDraft>

export interface ChatMessage {
  key: number
  time: string
  message: string
  username: string
  isTrusted: boolean
}

export interface ChatStateDraft {
  global: ChatMessage[]
}
export type ChatState = Readonly<ChatStateDraft>

export interface SnackbarStateDraft {
  message: string | null
}
export type SnackbarState = Readonly<SnackbarStateDraft>

export interface StateDraft {
  save: SaveState
  router: RouterState
  connection: ConnectionState
  emulator: EmulatorState
  server: ServerState
  chat: ChatState
  snackbar: SnackbarState
}
export type State = Readonly<StateDraft>
