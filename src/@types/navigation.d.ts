type AppointmentDetailsProps = {
    id: string
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            SignIn: undefined
            Home: undefined
            AppointmentDetails: AppointmentDetailsProps
        }
    }
}