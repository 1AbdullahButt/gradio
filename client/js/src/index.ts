import { initialize_console_forwarding_on_space } from "./helpers/console_forward.js";

export { Client } from "./client.js";

export { predict } from "./utils/predict.js";
export { submit } from "./utils/submit.js";
export { upload_files } from "./utils/upload_files.js";
export { FileData, upload, prepare_files } from "./upload.js";
export { handle_file } from "./helpers/data.js";
export { get_zerogpu_origin } from "./helpers/zerogpu.js";
export {
	initialize_console_forwarding,
	is_console_forward_origin_allowed
} from "./helpers/console_forward.js";

// custom pages such as gr.Server ones capture from the moment they import the client
initialize_console_forwarding_on_space();
export {
	apply_run_history_replay,
	clear_run_history,
	consume_run_history_replay,
	delete_run_history,
	on_run_history_change,
	read_run_history,
	read_run_history_storage,
	run_history_url,
	set_run_history_storage,
	stage_run_history_replay,
	type ReplayTarget,
	type RunHistoryStorage,
	type RunHistoryScope,
	type StoredRunComponent,
	type StoredRun
} from "./utils/run_history.js";
export {
	asset_url,
	connect_bucket,
	disconnect_bucket,
	is_valid_bucket_id,
	list_bucket_records,
	list_user_buckets,
	type HistoryRecord,
	type HistoryResult
} from "./utils/bucket_sync.js";

export type {
	SpaceStatus,
	StatusMessage,
	Status,
	client_return,
	UploadResponse,
	RenderMessage,
	LogMessage,
	Payload,
	Config,
	ValidationError
} from "./types.js";

export { MISSING_CREDENTIALS_MSG } from "./constants.js";

// todo: remove in @gradio/client v1.0
export { client } from "./client.js";
export { duplicate_space as duplicate } from "./client.js";
