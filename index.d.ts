declare function Yemot(): YemotRouter;

interface YemotRouter {
    add_fn: (path: string, handler: Handler) => void;
}
interface Call {

    did: string;

    phone: string;

    real_did: string;

    call_id: string;

    extension: string;

    read(massage: msg_data, mode?: mode, options?: read_options): Promise<{ data: string | false, hangup: boolean }>;

    go_to_folder(folder: string): void;

    id_list_message(data: msg_data): void;

    routing_yemot(phone: string): void;

    restart_ext(): void;
}
type Handler = (p: Call) => void;

type msg_data = [
    { type: data_type, data: string }
];

type data_type = "file" | "text" | "speech" | "digits" | "number" | "alpha";

type mode = "tap" | "stt" | "record";

type read_options = {
    val_name: string,
    re_enter_if_exists: boolean,
    max: number,
    min: number,
    sec_wait: number,
    play_ok_mode: play_ok_mode,
    block_asterisk: boolean,
    block_zero: boolean,
    replace_char: string
    digits_allowed: number[],
    amount_attempts: number,
    read_none: boolean,
    read_none_var: string,

    lang: string,
    allow_typing: boolean,

    path: string,
    file_name: string,
    record_ok: boolean,
    record_hangup: boolean,
    record_attach: boolean
};

type play_ok_mode = "Number" | "Digits" | "File" | "Alpha" | "No";

export = Yemot;