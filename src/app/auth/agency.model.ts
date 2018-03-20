export interface Agency {
    agencyId: string;
    email: string;
    phone: {countryCode: string, contactNo: number};
    name: string;
    contractSigned: boolean;
    tradeLicenseNo?: string;
}
