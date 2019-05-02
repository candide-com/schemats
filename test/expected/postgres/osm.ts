/* tslint:disable */

export type DateInput = Date | string

export type FormatEnum = 'html' | 'markdown' | 'text';
export type UserStatusEnum = 'active' | 'confirmed' | 'deleted' | 'pending' | 'suspended';

export interface UsersRow {
    email: string;
    id: number;
    pass_crypt: string;
    creation_time: Date;
    display_name: string;
    data_public: boolean;
    description: string;
    home_lat: number | null;
    home_lon: number | null;
    home_zoom: number | null;
    nearby: number | null;
    pass_salt: string | null;
    image_file_name: string | null;
    email_valid: boolean;
    new_email: string | null;
    creation_ip: string | null;
    languages: string | null;
    status: UserStatusEnum;
    terms_agreed: Date | null;
    consider_pd: boolean;
    preferred_editor: string | null;
    terms_seen: boolean;
    auth_uid: string | null;
    description_format: FormatEnum;
    image_fingerprint: string | null;
    changesets_count: number;
    traces_count: number;
    diary_entries_count: number;
    image_use_gravatar: boolean;
    image_content_type: string | null;
    auth_provider: string | null;
    uuid_column: string | null;
    number: number | null;
    string: string | null;
    money_col: number | null;
    char_col: string | null;
    time_col: string | null;
    inet_col: string | null;
    jsonb_col: Object | null;
    numeric_col: string | null;
    bytea_col: string | null;
    bool_array_col: Array<boolean> | null;
    varchar_array_col: Array<string> | null;
    int2_array_col: Array<number> | null;
    int4_array_col: Array<number> | null;
    int8_array_col: Array<number> | null;
    uuid_array_col: Array<string> | null;
    text_array_col: Array<string> | null;
    bytea_array_col: Array<string> | null;
    real_col: number | null;
    double_col: number | null;
    time_with_tz: string | null;
    oid_col: number | null;
    interval_col: string | null;
    json_col: Object | null;
    date_col: Date | null;
    unspported_path_type: any | null;
    name_type_col: string | null;
    json_array_col: Array<Object> | null;
    jsonb_array_col: Array<Object> | null;
    timestamptz_array_col: Array<Date> | null;
}

export interface UsersRowInput {
    email: string;
    id: number;
    pass_crypt: string;
    creation_time: DateInput;
    display_name?: string;
    data_public?: boolean;
    description?: string;
    home_lat?: number | null;
    home_lon?: number | null;
    home_zoom?: number | null;
    nearby?: number | null;
    pass_salt?: string | null;
    image_file_name?: string | null;
    email_valid?: boolean;
    new_email?: string | null;
    creation_ip?: string | null;
    languages?: string | null;
    status?: UserStatusEnum;
    terms_agreed?: DateInput | null;
    consider_pd?: boolean;
    preferred_editor?: string | null;
    terms_seen?: boolean;
    auth_uid?: string | null;
    description_format?: FormatEnum;
    image_fingerprint?: string | null;
    changesets_count?: number;
    traces_count?: number;
    diary_entries_count?: number;
    image_use_gravatar?: boolean;
    image_content_type?: string | null;
    auth_provider?: string | null;
    uuid_column?: string | null;
    number?: number | null;
    string?: string | null;
    money_col?: number | null;
    char_col?: string | null;
    time_col?: string | null;
    inet_col?: string | null;
    jsonb_col?: Object | null;
    numeric_col?: string | null;
    bytea_col?: string | null;
    bool_array_col?: Array<boolean> | null;
    varchar_array_col?: Array<string> | null;
    int2_array_col?: Array<number> | null;
    int4_array_col?: Array<number> | null;
    int8_array_col?: Array<number> | null;
    uuid_array_col?: Array<string> | null;
    text_array_col?: Array<string> | null;
    bytea_array_col?: Array<string> | null;
    real_col?: number | null;
    double_col?: number | null;
    time_with_tz?: string | null;
    oid_col?: number | null;
    interval_col?: string | null;
    json_col?: Object | null;
    date_col?: DateInput | null;
    unspported_path_type?: any | null;
    name_type_col?: string | null;
    json_array_col?: Array<Object> | null;
    jsonb_array_col?: Array<Object> | null;
    timestamptz_array_col?: Array<DateInput> | null;
}

export interface SecondTableRow {
    email: string;
}

export interface SecondTableRowInput {
    email: string;
}
