import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'mentor', title: 'Mentor', menuType: MenuType.LEFT, icon:'ti-user' },
    { path: 'mentor-list', title: 'Mentor list', menuType: MenuType.LEFT, icon:'ti-view-list-alt' },
];
