export interface Mission {
    mission_name: string;
    launch_year: string;
    launch_date_local: Date;
    rocket: {
      rocket_name: string;
    };
    launch_success: boolean;
  }
  