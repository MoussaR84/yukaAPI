import { NavigationAction } from "react-navigation";

const resetNavigation = () => {
  resetTabAction = NavigationActions.navigate({
    routeName: "Scan",
    action: NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "DashboardInitial" })],
    }),
  });
  props.navigation.dispatch(resetTabAction);
};

export default resetNavigation;
