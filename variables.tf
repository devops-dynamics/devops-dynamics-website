variable "tenancy_ocid" {
  description = "The OCID of the tenancy"
  type        = string
}

variable "user_ocid" {
  description = "The OCID of the user"
  type        = string
}

variable "private_key" {
  description = "The private key for API signing"
  type        = string
  sensitive   = true
}

variable "fingerprint" {
  description = "The fingerprint for the private key"
  type        = string
}

variable "region" {
  description = "The region for OCI operations"
  type        = string
}

variable "compartment_id" {
  description = "Compartment ID"
  type        = string
}

variable "vcn_cidr_blocks" {
  description = "VCN CIDR Blocks"
  type        = list(string)
}

variable "vcn_display_name" {
  description = "VCN Display Name"
  type        = string
}

variable "vcn_dns_label" {
  description = "VCN DNS Label"
  type        = string
}

variable "oci_group_name" {
  description = "OCI group name that will be allowed to manage VCN resources"
  type        = string
}

variable "subnet_cidr_block" {
  description = "Subnet CIDR Block"
  type        = string
}

variable "image_ocid" {
  description = "OCID of the image to be used for the Compute instance"
  type        = string
}

variable "ssh_public_keys" {
  description = "SSH Public Keys"
  type        = string
}
