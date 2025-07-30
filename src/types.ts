// Простые типы для SpaceX данных
export interface SpaceXLaunch {
  flight_number: number;
  mission_name: string;
  rocket: {
    rocket_name: string;
  };
  links: {
    mission_patch_small: string | null;
  };
  details: string;
}

// Типы для состояния приложения
export interface AppState {
  list: SpaceXLaunch[];
  modal: {
    show: boolean;
    card: SpaceXLaunch | null;
  };
}

// Типы для действий
export type AppAction = 
  | { type: 'FETCH_LIST'; payload: SpaceXLaunch[] }
  | { type: 'SHOW_MODAL'; payload: { show: boolean; card: SpaceXLaunch } };

// Типы для пропсов компонентов
export interface ListElementProps {
  data: SpaceXLaunch;
  dispatch: React.Dispatch<AppAction>;
}

export interface ModalProps {
  data: SpaceXLaunch;
  dispatch: React.Dispatch<AppAction>;
} 